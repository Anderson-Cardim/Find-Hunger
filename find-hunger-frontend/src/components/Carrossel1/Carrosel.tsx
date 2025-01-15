import React, { useState } from 'react';
import Slider from "react-slick";
import ImgEletrcista from "../../assets/eletricista-c.png"
import ImgPintor from "../../assets/pintor-c.png"
import ImgTecnico from "../../assets/tecnico-c.png"
import ImgMaquiagem from "../../assets/maquiagem-c.png"

import styles from './Carrosel.module.css'
import { Cpu, Lightning, MaskHappy, Palette } from 'phosphor-react';

export function Carrosel() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <div className="slider-container">
      <h3 className={styles.titulo}> Serviços Populares </h3>
      <div className={styles.divSlides}
        style={{
          width: width + "px",
          display: display ? "block" : "flex"
        }}>
        <Slider {...settings}>
          <div className={styles.divSecIcon}>
            <div className={styles.divIcon}>
              <Lightning size={76} />
            </div>
            <p className={styles.paragrafoCarrosel}>Eletricista</p>
          </div>
          <div className={styles.divSecIcon}>
            <div className={styles.divIcon}>
              <Palette size={76} />
            </div>
            <p className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Pintor</p>
          </div>
          <div className={styles.divSecIcon}>
            <div className={styles.divIcon}>
              <Cpu size={76} />
            </div>
            <p className={`${styles.paragrafoCarrosel} ${styles.paragrafoEspecial}`}>Técnico</p>
          </div>
          <div className={styles.divSecIcon}>
            <div className={styles.divIcon}>
              <MaskHappy size={76} />
            </div>
            <p className={styles.paragrafoCarrosel}>Maquiagem</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}