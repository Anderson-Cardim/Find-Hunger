import styles from './MapaEmpresa.module.css'
import ImgMapa from '../../assets/ImgMapa.png'

export function MapaEmpresa() {
  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>Localização</h3>
      <div className={styles.ilmapa}>
        <img className={styles.imgmapa} src={ImgMapa} alt="" />
        <div className={styles.divLink}>
          <a className={styles.link} href="https://maps.app.goo.gl/PfqJD2ukz7RULzv27">Ver no mapa</a>
        </div>
      </div>
      <div className={styles.descricao}>
        <h5 className={styles.subtitulo}>Endereço</h5>
        <p className={styles.paragrafo}>Bahia, Eunápolis, Centro, Av Duque de caxias, 1124</p>
      </div>
    </div>
  )
}
