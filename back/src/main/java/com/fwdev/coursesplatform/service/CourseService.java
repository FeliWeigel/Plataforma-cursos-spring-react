package com.fwdev.coursesplatform.service;

import com.fwdev.coursesplatform.entities.Course;
import com.fwdev.coursesplatform.exceptions.CourseNotFoundException;
import com.fwdev.coursesplatform.repository.CourseRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;

    public Course addCourse(Course course){
        return courseRepository.save(course);
    }

    public ResponseEntity<Object> deleteCourseById(Long courseId){
        Optional<Course> courseDelete = courseRepository.findById(courseId);
        if(courseDelete.isPresent()){
            courseRepository.deleteById(courseId);
            return new ResponseEntity<>(courseDelete, HttpStatus.OK);
        }

        return new ResponseEntity<>(new CourseNotFoundException("Course with id: " + courseId + " not found!"), HttpStatus.NOT_FOUND);
    }

    public void deleteAllCourses(){
        courseRepository.deleteAll();
    }

    public ResponseEntity<Object> updateCourse(Course course){
        if(course.getId() == null){
            return new ResponseEntity<>(new CourseNotFoundException("Course not found! Request body Id is null."), HttpStatus.BAD_REQUEST);
        }

        if(courseRepository.findById(course.getId()).isEmpty()){
            return new ResponseEntity<>(new CourseNotFoundException("Course with id: " + course.getId() + " not found!"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(courseRepository.save(course), HttpStatus.OK);
    }

    public List<Course> listAllCourses(){
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseById(Long courseId){
        Optional<Course> course = courseRepository.findById(courseId);
        if(course.isPresent()){
            return courseRepository.findById(courseId);
        }
        return null;
    }


    public List<Course> getCoursesByType(String type){
        List<Course> allCourses = courseRepository.findAll();
        List<Course> searchedCourses = new ArrayList<>();

        if(!allCourses.isEmpty()){
            for(Course course :allCourses){
                if(course.getType().equals(type)){
                    searchedCourses.add(course);
                }
            }
        }
        return searchedCourses;
    }

    public List<Course> getCoursesByName(String name){
        List<Course> allCourses = courseRepository.findAll();
        List<Course> searchedCourses = new ArrayList<>();

        if(!allCourses.isEmpty()){
            for(Course course :allCourses){
                if(course.getName().equals(name)){
                    searchedCourses.add(course);
                }
            }
        }
        return searchedCourses;
    }

}
