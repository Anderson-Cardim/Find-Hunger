import { InputHTMLAttributes } from "react";
import styles from './inputPerfil.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  title: string;
  placeholder: string;
}

export function InputPerfil({
  type,
  title,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className={styles.InputBox}>
        <h5>{title}</h5>
        <input type={type} placeholder={placeholder} {...props} />
    </div>
  );
}

