package com.fwdev.coursesplatform.controllers;

import com.fwdev.coursesplatform.entities.Course;
import com.fwdev.coursesplatform.service.CourseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/courses")
public class CourseController {

    private final CourseService courseService;

    @GetMapping("/all")
    public ResponseEntity<List<Course>> getAllCourses(){
        return new ResponseEntity<>(courseService.listAllCourses(), HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Object> getCourseById(@PathVariable Long id){
        return courseService.getCourseById(id);
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
    public ResponseEntity<Course> addCourse(@RequestBody Course course){
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
