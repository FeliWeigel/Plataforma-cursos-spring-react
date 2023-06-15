package com.fwdev.coursesplatform.security.auth;

import com.fwdev.coursesplatform.exceptions.UserNotFoundException;
import com.fwdev.coursesplatform.repository.UserRepository;
import com.fwdev.coursesplatform.security.config.JwtService;
import com.fwdev.coursesplatform.security.jwt.Token;
import com.fwdev.coursesplatform.security.jwt.TokenRepository;
import com.fwdev.coursesplatform.user.User;
import io.swagger.v3.oas.annotations.Hidden;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final UserRepository userRepository;
    private final TokenRepository tokenRepository;
    private final AuthenticationManager authenticationManager;

    @GetMapping("/all_users")
    @Hidden
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>( userRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<Object> registerUser(@RequestBody RegisterRequest registerRequest){
        return authService.register(registerRequest);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> authenticateUser(@RequestBody AuthRequest authRequest){
        return new ResponseEntity<>(authService.login(authRequest), HttpStatus.OK);
    }

}
