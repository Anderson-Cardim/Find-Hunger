import { InputHTMLAttributes, ReactNode } from "react";
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  icons?: ReactNode; 
}

export function Input({
  type,
  placeholder,
  icons,
}: InputProps) {
  return (
      <div className={styles.InputBox}>
          <input placeholder={placeholder} type={type}/>
        <i>{icons}</i>
      </div>
   );
}
