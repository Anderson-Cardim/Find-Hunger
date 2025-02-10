import React, { useState } from 'react';
import Slider from "react-slick";

import styles from './Carrosel.module.css'

interface CarroselProps {
  data: {
    nome: string;
    image: string;
  }[];
}

export function Carrosel({data}: CarroselProps) {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <div className={styles.slidercontainer}>
      <h3 className={styles.titulo}> Categoria de produtos </h3>
      <div className={styles.divSlides}
        style={{
          display: display ? "block" : "flex",
          width: "100vw",
        }}>
          
        <Slider {...settings}>
          {data.map((item, index) => (
          <div key={index}>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
              <img className={styles.img} src={item.image} alt={item.nome} />
              </div>
              <span className={styles.paragrafoCarrosel}>{item.nome}</span>
              </div>
          </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
}
