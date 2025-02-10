import React, { useState } from 'react';
import Slider from "react-slick";
import ImgHamburguer from "../../assets/ImgHamburguer2.png"
import ImgPizza from "../../assets/imgPizza1.png"
import ImgBatatafrita from "../../assets/ImgBatataFrita3.png"
import ImgRefrigerantes from "../../assets/ImgRefrigerante4.png"

import styles from './Carrosel.module.css'

// const data = [
//   {nome: 'Hamburguer', image: ImgHamburguer},
//   {nome: 'Pizza', image: ImgPizza},
//   {nome: 'Batatas', image: ImgBatatafrita},
//   {nome: 'Bebidas', image: ImgRefrigerantes},
// ]

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
    slidesToScroll: 3
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
