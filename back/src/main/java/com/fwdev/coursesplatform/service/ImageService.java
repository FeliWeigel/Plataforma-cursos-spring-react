package com.fwdev.coursesplatform.service;

import com.fwdev.coursesplatform.entities.Image;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ImageService {
    public Image create(Image image);
    public List<Image> listAll();
    public Image listById(Long id);
    public List<Image> listByName(String name);
}
