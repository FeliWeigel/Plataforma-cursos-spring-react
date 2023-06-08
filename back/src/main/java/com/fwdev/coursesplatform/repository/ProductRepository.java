package com.fwdev.coursesplatform.repository;

import com.fwdev.coursesplatform.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
