package com.fwdev.coursesplatform.security.config;

import lombok.RequiredArgsConstructor;
import org.apache.catalina.filters.CorsFilter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthFilter jwtAuthFilter;
    private final LogoutService logoutService;
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http.cors().and().csrf().disable()
                .authorizeHttpRequests()
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**")
                .permitAll()
                .requestMatchers("/api/v1/auth/login", "/api/v1/auth/register")
                .permitAll()
                .requestMatchers("/add")
                .permitAll()
                .requestMatchers("/home")
                .permitAll()
                .requestMatchers("/display")
                .permitAll()
                .requestMatchers("/")
                .permitAll()
                .requestMatchers("/api/v1/auth/all_users")
                .hasAuthority("ADMIN")
                .requestMatchers("/api/v1/auth/delete/**")
                .hasAuthority("ADMIN")
                .requestMatchers("/api/v1/courses/delete/**", "/api/v1/courses/update")
                .hasAuthority("ADMIN")
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .logout()
                .logoutUrl("/api/v1/auth/logout")
                .addLogoutHandler(logoutService)
                .logoutSuccessHandler((request, response, authentication) -> SecurityContextHolder.clearContext())
                .logoutSuccessUrl("/api/v1/auth/login")
                .and()
                .build();
    }
}
