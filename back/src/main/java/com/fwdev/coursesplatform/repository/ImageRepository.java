package com.fwdev.coursesplatform.repository;

import com.fwdev.coursesplatform.entities.Image;
import jakarta.transaction.Transactional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
@Transactional
public interface ImageRepository extends CrudRepository<Image, Long> {
}
