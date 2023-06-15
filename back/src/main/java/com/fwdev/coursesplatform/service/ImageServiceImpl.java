package com.fwdev.coursesplatform.service;

import com.fwdev.coursesplatform.entities.Image;
import com.fwdev.coursesplatform.repository.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService{

    private final ImageRepository imageRepository;

    @Override
    public Image create(Image image) {
        return imageRepository.save(image);
    }
    @Override
    public List<Image> listAll() {
        return (List<Image>) imageRepository.findAll();
    }
    @Override
    public Image listById(Long id) {
        return imageRepository.findById(id).get();
    }

    @Override
    public List<Image> listByName(String name) {
        List<Image> allImages = (List<Image>) imageRepository.findAll();
        List<Image> searchedImages = new ArrayList<>();
        for(Image image : allImages){
            if(image.getName().equals(name)){
                searchedImages.add(image);
            }
        }

        return searchedImages;
    }


}
