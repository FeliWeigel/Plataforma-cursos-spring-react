package com.fwdev.coursesplatform.security.auth;

import com.fwdev.coursesplatform.exceptions.BusyEmailException;
import com.fwdev.coursesplatform.exceptions.InvalidPasswordException;
import com.fwdev.coursesplatform.repository.UserRepository;
import com.fwdev.coursesplatform.security.config.JwtService;
import com.fwdev.coursesplatform.security.jwt.Token;
import com.fwdev.coursesplatform.security.jwt.TokenRepository;
import com.fwdev.coursesplatform.user.Role;
import com.fwdev.coursesplatform.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtService jwtService;
    private final TokenRepository tokenRepository;
    private final UserRepository userRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;

    private Boolean isValidPassword(String password){
        char passChar;
        boolean capitalLetter = false, number = false, specialChar = false;

        Pattern specialsList = Pattern.compile ("[?!¡@¿.,´)]");
        Matcher hasSpecial = specialsList.matcher(password);

        for(int i = 0; i < password.length(); i++){
            passChar = password.charAt(i);
            if(Character.isUpperCase(passChar)){
                capitalLetter = true;
            }else if(Character.isDigit(passChar)){
                number = true;
            }else if(hasSpecial.find()){
                specialChar = true;
            }
        }

        if(capitalLetter && number && specialChar){
            return true;
        }

        return false;
    }

    private void saveUserToken(User user, String jwtToken){
        var token = Token.builder()
                .token(jwtToken)
                .user(user)
                .expired(false)
                .revoked(false)
                .build();

        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user){
        var validUserTokens = tokenRepository.allValidTokenByUser(user.getId());
        if(validUserTokens.isEmpty()){
            return;
        }

        validUserTokens.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public ResponseEntity<Object> register(RegisterRequest registerRequest){
        if(userRepository.findByEmail(registerRequest.getEmail()).isPresent()){
            return new ResponseEntity<>(new BusyEmailException("Error! The email is associated with an existing account."), HttpStatus.CONFLICT);
        }else if(!registerRequest.getPassword().equals(registerRequest.getRepeatPassword())){
            return new ResponseEntity<>(new InvalidPasswordException("Error! Passwords must match."), HttpStatus.BAD_REQUEST);
        }else if(registerRequest.getPassword().length() < 6){
            return new ResponseEntity<>(new InvalidPasswordException("Error! Password must contain at least 6 digits."), HttpStatus.BAD_REQUEST);
        }
        else if(!isValidPassword(registerRequest.getPassword())){
            return new ResponseEntity<>(new InvalidPasswordException("Error! Password must contain a capital letter, number and symbol."), HttpStatus.BAD_REQUEST);
        }

        var user = User.builder()
                .firstname(registerRequest.getFirstname())
                .lastname(registerRequest.getLastname())
                .email(registerRequest.getEmail())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(Role.USER)
                .build();

        var savedUser = userRepository.save(user);
        var token = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);
        saveUserToken(savedUser, token);

        return new ResponseEntity<>(
                AuthResponse.builder()
                        .accessToken(token)
                        .refreshToken(refreshToken)
                        .build(), HttpStatus.OK);
    }

    public AuthResponse login(AuthRequest authRequest){
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        authRequest.getEmail(),
                        authRequest.getPassword()
                )
        );

        var user = userRepository.findByEmail(authRequest.getEmail()).orElseThrow();
        var token = jwtService.generateToken(user);
        var refreshToken = jwtService.generateRefreshToken(user);

        revokeAllUserTokens(user);
        saveUserToken(user, token);
        return AuthResponse.builder()
                .accessToken(token)
                .refreshToken(token)
                .build();
    }


}
