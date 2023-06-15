package com.fwdev.coursesplatform.controllers;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fwdev.coursesplatform.entities.Image;
import com.fwdev.coursesplatform.service.CourseService;
import com.fwdev.coursesplatform.service.ImageService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;


import javax.sql.rowset.serial.SerialException;
import java.io.IOException;
import java.sql.Blob;
import java.sql.SQLException;
import java.util.List;

@Controller
@RestController
@JsonIgnoreProperties(ignoreUnknown = true)
public class ImageController {
    @Autowired
    private ImageService imageService;
    @Autowired
    private CourseService courseService;

    @GetMapping("/display")
    public ResponseEntity<byte[]> displayImage(@RequestParam("id") Long id) throws IOException, SQLException
    {
        Image image = imageService.listById(id);
        byte [] imageBytes = null;
        imageBytes = image.getImage().getBytes(1,(int) image.getImage().length());
        return ResponseEntity.ok().contentType(MediaType.IMAGE_JPEG).body(imageBytes);
    }

    @GetMapping("/")
    public ModelAndView home(){
        ModelAndView mv = new ModelAndView("index");
        List<Image> imageList = imageService.listAll();
        mv.addObject("imageList", imageList);
        return mv;
    }

    // add image - get
    @GetMapping("/add")
    public ModelAndView addImage(){
        return new ModelAndView("addimage");
    }

    // add image - post
    @PostMapping("/add")
    public String addImagePost(HttpServletRequest request, @RequestParam("image") MultipartFile file, @RequestParam String name) throws IOException, SerialException, SQLException
    {
        byte[] bytes = file.getBytes();
        Blob blob = new javax.sql.rowset.serial.SerialBlob(bytes);

        Image image = new Image();
        image.setImage(blob);
        image.setName(name);
        imageService.create(image);
        return "redirect:/";
    }

    @GetMapping("/by_name/{name}")
    public List<Image> getImagesByName(@PathVariable String name){
        return imageService.listByName(name);
    }
}
