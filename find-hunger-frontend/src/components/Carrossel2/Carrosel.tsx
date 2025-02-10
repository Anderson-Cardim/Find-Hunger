import React, { useState } from 'react';
import Slider from "react-slick";
import ImgHamburguer from "../../assets/ImgHamburguer2.png"
import ImgPizza from "../../assets/imgPizza1.png"
import ImgBatatafrita from "../../assets/ImgBatataFrita3.png"
import ImgRefrigerantes from "../../assets/ImgRefrigerante4.png"

import styles from './Carrosel.module.css'


export function Carrosel() {
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
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgHamburguer} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Hamburguer</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgPizza} alt="" />
              </div>
              <span className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Pizza</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgBatatafrita} alt="" />
              </div>
              <span className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Batatas</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgRefrigerantes} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Bebidas</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
