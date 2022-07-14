import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src:
      "https://cdn.pixabay.com/photo/2020/06/21/15/57/cup-of-coffee-5325621_960_720.jpg",
    alt: "Project 1",
    desc: "Coffe",
  },
  {
    src:
      "https://sc04.alicdn.com/kf/U821fdbb2bbdc42fa92cbb62d4b74d612h.jpg",
    alt: "Project 2",
    desc: "Soccer",
  },
  {
    src:
      "https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo%20(65)-1619319054.webp",
    alt: "Project 3",
    desc: "Learning",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;