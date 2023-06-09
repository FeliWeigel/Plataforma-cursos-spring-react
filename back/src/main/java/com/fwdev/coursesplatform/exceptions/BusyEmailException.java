package com.fwdev.coursesplatform.exceptions;

public class BusyEmailException extends RuntimeException{
    public BusyEmailException(String message){
        super(message);
    }
}
