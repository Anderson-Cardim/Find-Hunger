import styles from './BannerPrincipal.module.css'; 
interface IBannerPrincipal { 
  img: string; 
} export function BannerPrincipal({ 
  img 
}: IBannerPrincipal) { 
  return ( 
    <div className={styles.divBanner}> 
      <img src={img} alt="Banner" /> 
    </div> 
  )
}
