import React, { useState } from 'react';
import Slider from "react-slick";
import ImgHamburguer from "../../assets/ImgHamburguer2.png"
import ImgPizza from "../../assets/imgPizza1.png"
import ImgBatatafrita from "../../assets/ImgBatataFrita3.png"
import ImgRefrigerantes from "../../assets/ImgRefrigerante4.png"
import ImgSobremesa from "../../assets/ImgSobremesa.jpg"
import ImgComidaJaponesa from "../../assets/ImgComidaJaponesa5.png"
import ImgMassas from "../../assets/ImgMassa8.png"
import ImgCafe from "../../assets/ImgCafé7 (1).png"
import ImgSalada from "../../assets/ImgSalada9 (1).jpg"

import styles from './Carrosel.module.css'

export function Carrosel() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <div className={styles.slidercontainer}>
      <h3 className={styles.titulo}> Cardápios populares </h3>
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
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgSobremesa} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Sobremesas</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgComidaJaponesa} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Japonesa</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgMassas} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Massas</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgCafe} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Café</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgSalada} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Saladas</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}