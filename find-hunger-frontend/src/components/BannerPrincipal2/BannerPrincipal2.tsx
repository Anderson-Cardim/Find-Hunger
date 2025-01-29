import ImgBanner from '../../assets/banner01.jpeg'

import styles from './BannerPrincipal2.module.css'

export function BannerPrincipal2() {
  return (
    <div className={styles.container}>
      <img className={styles.imgbanner} src={ImgBanner} alt="" />
    </div>
  )
}
