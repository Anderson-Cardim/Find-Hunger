import styles from './BannerPrincipal.module.css'; 
import { register } from "swiper/element/bundle"

import img1 from '../../assets/Anúncio1 (1).png'
import img2 from '../../assets/Banner02.jpg'
import img3 from '../../assets/Anuncio3.png'

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';

export function BannerPrincipal() {

  const data = [
    {id: '1', image: img1},
    {id: '2', image: img2},
    {id: '3', image: img3},
  ]

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }} 
        loop={true} 
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image} 
              alt="Slider" 
              className={styles.slideItem}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
