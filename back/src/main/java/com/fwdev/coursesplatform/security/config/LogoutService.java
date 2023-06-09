package com.fwdev.coursesplatform.security.config;

import com.fwdev.coursesplatform.security.jwt.TokenRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.LogoutHandler;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LogoutService implements LogoutHandler {

    private final TokenRepository tokenRepository;


    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {
        final String authHeader = request.getHeader("Authorization");
        final String jwtToken;

        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            return;
        }

        jwtToken = authHeader.substring(7);
        var savedToken = tokenRepository.findByToken(jwtToken).orElse(null);
        if(savedToken != null){
            savedToken.setExpired(true);
            savedToken.setRevoked(true);
            tokenRepository.save(savedToken);
            SecurityContextHolder.clearContext();
        }
    }
}
