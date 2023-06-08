package com.fwdev.coursesplatform.repository;

import com.fwdev.coursesplatform.user.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
