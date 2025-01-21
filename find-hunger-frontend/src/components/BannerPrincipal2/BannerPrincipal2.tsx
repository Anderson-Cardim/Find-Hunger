import ImgBanner from '../../assets/Banner2.png'

import styles from './BannerPrincipal2.module.css'

export function BannerPrincipal2() {
  return (
    <div className={styles.container}>
      <img className={styles.imgbanner} src={ImgBanner} alt="" />
    </div>
  )
}