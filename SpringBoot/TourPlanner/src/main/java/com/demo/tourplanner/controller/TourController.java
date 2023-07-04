package com.demo.tourplanner.controller;

import com.demo.tourplanner.entity.ImageModel;
import com.demo.tourplanner.entity.Tour;
import com.demo.tourplanner.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(allowedHeaders = "*",origins = "*")
public class TourController {

    @Autowired
    private TourService tourService;

    @PostMapping(value = {"/addNewTour"}, consumes = {MediaType.MULTIPART_FORM_DATA_VALUE})
    public Tour addNewTour(@RequestPart("tour") Tour tour,
                           @RequestPart("imageFile")MultipartFile[] file) {
        try{
            Set<ImageModel> images = uploadImage(file);
            tour.setTour_Images(images);
            return tourService.addNewTour(tour);
        } catch(Exception e){
            System.out.println(e.getMessage());
            return null;
        }

    }

    public Set<ImageModel> uploadImage(MultipartFile[] multipartFiles) throws IOException {
        Set<ImageModel> imageModels = new HashSet<>();

        for(MultipartFile file: multipartFiles) {
            ImageModel imageModel = new ImageModel(
                    file.getOriginalFilename(),
                    file.getContentType(),
                    file.getBytes()
            );
            imageModels.add(imageModel);
        }
        return imageModels;
    }

    @GetMapping({"/getAllTours"})
    public List<Tour> getAllTours(){
        return tourService.getAllTours();
    }

    @GetMapping({"/getTourDetailById/{tour_Id}"})
    public Tour getTourDetailById(@PathVariable("tour_Id") Integer tour_Id) {
        return tourService.getTourDetailById(tour_Id);
    }

    @DeleteMapping({"/deleteTourDetails/{tour_Id}"})
    public void deleteTourDetails(@PathVariable("tour_Id") Integer tour_Id){
        tourService.deleteTourDetails(tour_Id);
    }

}
