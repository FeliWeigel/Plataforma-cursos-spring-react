package com.fwdev.coursesplatform.service;

import com.fwdev.coursesplatform.entities.Image;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ImageService {
    public Image create(Image image);
    public List<Image> viewAll();
    public Image viewById(long id);
}
