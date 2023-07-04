package com.demo.tourplanner.dao;

import com.demo.tourplanner.entity.Tour;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourDao extends CrudRepository<Tour, Integer> {
}
