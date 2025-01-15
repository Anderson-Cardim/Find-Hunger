import styles from './InputPesquisar.module.css'

export function InputPesquisar() {
  return (
    <div className={styles.DivPesquisar}>
      <input type="search" name="PesquisarServicos" id="PesquisarServicos" className={styles.PesquisarServicos} placeholder='Serviços ou Profissionais' />
    </div>
  )
}