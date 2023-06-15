package com.fwdev.coursesplatform.controllers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fwdev.coursesplatform.entities.Course;
import com.fwdev.coursesplatform.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/courses")
@CrossOrigin("http://localhost:5173")
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getAllCourses(){

        return new ResponseEntity<>(courseService.listAllCourses(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Object> getCourseById(@PathVariable Long id){
        return new ResponseEntity<>(courseService.getCourseById(id), HttpStatus.OK);
    }

    @GetMapping("/find/{name}")
    public ResponseEntity<List<Course>> getCoursesByName(@PathVariable String name){
        return new ResponseEntity<>(courseService.getCoursesByName(name), HttpStatus.OK);
    }

    @GetMapping("/find/{type}")
    public ResponseEntity<List<Course>> getCoursesByType(@PathVariable String type){
        return new ResponseEntity<>(courseService.getCoursesByType(type), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Object> addCourse(@RequestBody Course course) {
        return new ResponseEntity<>(courseService.addCourse(course), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteCourseById(@PathVariable Long id){
        return courseService.deleteCourseById(id);
    }

    @DeleteMapping("/delete/all")
    public void deleteAllCourses(){
        courseService.deleteAllCourses();
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateCourse(@RequestBody Course course){
        return courseService.updateCourse(course);
    }
}
