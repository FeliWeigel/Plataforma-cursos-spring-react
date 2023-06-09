package com.fwdev.coursesplatform.repository;

import com.fwdev.coursesplatform.entities.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
