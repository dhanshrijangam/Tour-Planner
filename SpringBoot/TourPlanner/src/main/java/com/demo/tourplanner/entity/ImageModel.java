package com.demo.tourplanner.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "image_model")
public class ImageModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long image_id;
    private String image_name;
    private String image_type;
    @Column(length = 50000000)
    private byte[] image_picByte;

    public ImageModel() {
    }

    public ImageModel(String image_name, String image_type, byte[] image_picByte) {
        this.image_name = image_name;
        this.image_type = image_type;
        this.image_picByte = image_picByte;
    }

    public Long getImage_id() {
        return image_id;
    }

    public void setImage_id(Long image_id) {
        this.image_id = image_id;
    }

    public String getImage_name() {
        return image_name;
    }

    public void setImage_name(String image_name) {
        this.image_name = image_name;
    }

    public String getImage_type() {
        return image_type;
    }

    public void setImage_type(String image_type) {
        this.image_type = image_type;
    }

    public byte[] getImage_picByte() {
        return image_picByte;
    }

    public void setImage_picByte(byte[] image_picByte) {
        this.image_picByte = image_picByte;
    }
}
