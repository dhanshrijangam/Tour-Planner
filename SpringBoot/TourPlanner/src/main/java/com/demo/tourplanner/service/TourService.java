package com.demo.tourplanner.service;

import com.demo.tourplanner.dao.TourDao;
import com.demo.tourplanner.entity.Tour;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourService {

    @Autowired
    private TourDao tourDao;

    public Tour addNewTour(Tour tour){
        return tourDao.save(tour);
    }

    public List<Tour> getAllTours(){ return (List<Tour>) tourDao.findAll(); }

    public void deleteTourDetails(Integer tour_Id) {
        tourDao.deleteById(tour_Id);
    }

    public Tour getTourDetailById(Integer tour_Id) {
        return tourDao.findById(tour_Id).get();
    }
}
