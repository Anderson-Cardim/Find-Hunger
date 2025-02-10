import styles from './MapaEmpresa.module.css'

export function MapaEmpresa() {
  return (
    <div className={styles.container}>
      <h3 className={styles.titulo}>Localização</h3>
      <div className={styles.realMap}>
        <iframe className={styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.991457919492!2d-39.58896192498911!3d-16.374397537504056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7366dc6f0a22cd9%3A0xd62dfd95ca8cdb61!2sAv.%20Duque%20de%20Caxias%20-%20Centro%2C%20Eun%C3%A1polis%20-%20BA%2C%2045820-090!5e0!3m2!1spt-BR!2sbr!4v1739183715022!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy">
        </iframe>
      </div>
      <div className={styles.rodape}>
      </div>
    </div>
  )
}
