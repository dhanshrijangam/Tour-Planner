package com.demo.tourplanner.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer tour_Id;
    private String tour_Name;
    private String tour_No_Of_Days;
    private Double tour_Price;
    private String tour_Overview;
    private String tour_Highlights;

    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "tour_images",
            joinColumns = {
                @JoinColumn(name = "tour_id")
            },
            inverseJoinColumns = {
                @JoinColumn(name = "image_id")
            }
    )
    private Set<ImageModel> tour_Images;

    public Set<ImageModel> getTour_Images() {
        return tour_Images;
    }

    public void setTour_Images(Set<ImageModel> tour_Images) {
        this.tour_Images = tour_Images;
    }

    public Integer getTour_Id() {
        return tour_Id;
    }

    public void setTour_Id(Integer tour_Id) {
        this.tour_Id = tour_Id;
    }

    public String getTour_Name() {
        return tour_Name;
    }

    public void setTour_Name(String tour_Name) {
        this.tour_Name = tour_Name;
    }

    public String getTour_No_Of_Days() {
        return tour_No_Of_Days;
    }

    public void setTour_No_Of_Days(String tour_No_Of_Days) {
        this.tour_No_Of_Days = tour_No_Of_Days;
    }

    public Double getTour_Price() {
        return tour_Price;
    }

    public void setTour_Price(Double tour_Price) {
        this.tour_Price = tour_Price;
    }

    public String getTour_Overview() {
        return tour_Overview;
    }

    public void setTour_Overview(String tour_Overview) {
        this.tour_Overview = tour_Overview;
    }

    public String getTour_Highlights() {
        return tour_Highlights;
    }

    public void setTour_Highlights(String tour_Highlights) {
        this.tour_Highlights = tour_Highlights;
    }
}
