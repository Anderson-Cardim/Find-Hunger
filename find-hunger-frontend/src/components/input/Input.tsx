import { InputHTMLAttributes, ReactNode } from 'react';
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    type: string;
    placeholder: string;
    icons?: ReactNode; 
  }

export function Input({
    type,
    placeholder,
    icons,
    value,
    onChange,
  }: InputProps) {
    return (
        <div className={styles.InputBox}>
            <input 
              placeholder={placeholder} 
              type={type}
              value={value}
              onChange={onChange}        
            />
          <i>{icons}</i>
        </div>
    );
  }