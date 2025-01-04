import { ButtonHTMLAttributes } from 'react';
import styles from './ComercianteCliente.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    img?: string; 
    title: string;
  }
  
  export function ComercianteCliente({
    img,
    title,
    ...props
  }: Props) {
    return (
      <div>
        <button className={styles.containerNome} {...props}>
            <div className={styles.containerComerciante}>
                <img src={img} alt="" />
            </div>
        </button>
        <p>{title}</p>
      </div>
    );
  }
  