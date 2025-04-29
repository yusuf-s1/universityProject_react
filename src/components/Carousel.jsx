import React from 'react';
import carousel1 from '../assets/carousel1.jpg';
import carousel2 from '../assets/carousel2.jpg';
import carousel3 from '../assets/carousel3.jpg';
import carousel4 from '../assets/carousel4.jpg';
import carousel5 from '../assets/carousel5.jpg';
import brand from '../assets/brand.png';

export default function Carousel() {
  return (
    <>
      <div className="h-100">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={carousel1}
                className="d-block"
                style={{
                  width: '100%',
                  maxHeight: '560px',
                }}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={carousel2}
                className="d-block"
                style={{ width: '100%', maxHeight: '560px' }}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={carousel3}
                className="d-block"
                style={{ width: '100%', maxHeight: '560px' }}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={carousel4}
                className="d-block"
                style={{ width: '100%', maxHeight: '560px' }}
                alt=""
              />
            </div>
            <div className="carousel-item">
              <img
                src={carousel5}
                className="d-block"
                style={{ width: '100%', maxHeight: '560px' }}
                alt=""
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
