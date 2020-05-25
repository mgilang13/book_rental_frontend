import React from "react";
import Slider from "./Slider.js";
import "./Carousel.css";

class Carousel extends React.Component {
  render() {
    return (
      <div className="carousel m-3 ml-5 mr-5 mt-4">
        <div style={{ display: "flex", justifyContent: "space-between" }} />

        <Slider
          options={{
            pauseAutoPlayOnHover: true,
            wrapAround: true
          }}
        >
          <div className="slider">
            <img
              src="https://pastelbooks.id/wp-content/uploads/2019/12/DILAN-REPUBLISHED.png"
              alt="carousel img"
            />
            <h5 className="sliderTitle">Dilan 1990</h5>
            <h5 className="sliderAuthor">Pidi Baiq</h5>
          </div>
          <div className="slider">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/8/8f/Ubur-ubur-Lembur1.jpg"
              alt="carousel img"
            />
            <h5 className="sliderTitle">Ubur-ubur Lembur</h5>
            <h5 className="sliderAuthor">Raditya Dika</h5>
          </div>
          <div className="slider">
            <img
              src="https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg"
              alt="carousel img"
            />
            <h5 className="sliderTitle">Laskar Pelangi</h5>
            <h5 className="sliderAuthor">Andrea Hirata</h5>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
