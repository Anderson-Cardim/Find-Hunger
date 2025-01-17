import { useState } from 'react';
import styles from './ProfissionaisDestaque.module.css'
import Slider from 'react-slick';

export function ProfissionaisDestaque() {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2
  };

  return (
    <section className={styles.container}>
      <h3 className={styles.titulo}>Profissionais em Destaque</h3>
      <div className={styles.divSlides}
        style={{
          display: display ? "block" : "flex",
          width: "100vw",
        }}>
        <Slider {...settings}>
          <div className={styles.divBloco}>

          </div>
          <div className={styles.divBloco}>

          </div>
          <div className={styles.divBloco}>

          </div>
        </Slider>
      </div>
    </section>
  )
}