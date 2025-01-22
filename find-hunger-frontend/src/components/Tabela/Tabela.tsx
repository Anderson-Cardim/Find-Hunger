import styles from './Tabela.module.css'

export function Tabela() {
    return (
        <table className={styles.tabela}>
            <tr>
              <th>Horários</th>
            </tr>
            <tr>
              <td className={styles.dias}>Segunda-feira</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Terça-feira</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Quarta-feira</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Quinta-feira</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Sexta-feira</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Sabado</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
            <tr>
              <td className={styles.dias}>Domingo</td>
              <td className={styles.hora}>08:00-20:00</td>
            </tr>
          </table>
    )
}