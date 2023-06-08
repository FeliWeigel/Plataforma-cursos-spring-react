package com.fwdev.coursesplatform.repository;

import com.fwdev.coursesplatform.entities.Image;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends CrudRepository<Image, Long> {
}
