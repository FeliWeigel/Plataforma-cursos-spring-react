package com.fwdev.coursesplatform.appConfig;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

import java.util.Collections;

//http://localhost:8080/swagger-ui/index.html
@Configuration
public class SwaggerConfig {

    @Bean
    public Docket api(){
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiDetails())
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }


    public ApiInfo apiDetails(){
        return new ApiInfo("Plataforma de cursos API REST", "Documentation of -Courses Platform API REST- with Swagger 2. FWM.", "Version 1.0",
                "http://google.com", new Contact("Random User", "http://google.com", "random@gmail.com"),
                "MIT", "http://google.com", Collections.emptyList());
    }
}
