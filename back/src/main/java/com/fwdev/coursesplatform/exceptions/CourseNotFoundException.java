package com.fwdev.coursesplatform.exceptions;

public class CourseNotFoundException extends RuntimeException {
    public CourseNotFoundException(String message){
       super(message);
    }
}
