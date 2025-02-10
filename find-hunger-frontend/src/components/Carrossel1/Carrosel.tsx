import React, { useState } from 'react';
import Slider from "react-slick";
import ImgEletrcista from "../../assets/Eletricista.jpeg"
import ImgPintor from "../../assets/Pintor.jpeg"
import ImgTecnico from "../../assets/Tecnico.jpeg"
import ImgMaquiagem from "../../assets/Maquiagem.jpeg"

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
                <img className={styles.img} src={ImgEletrcista} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Eletricista</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgPintor} alt="" />
              </div>
              <span className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Pintor</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgTecnico} alt="" />
              </div>
              <span className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Técnico</span>
            </div>
          </div>
          <div>
            <div className={styles.divSecIcon}>
              <div className={styles.divIcon}>
                <img className={styles.img} src={ImgMaquiagem} alt="" />
              </div>
              <span className={styles.paragrafoCarrosel}>Maquiagem</span>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
