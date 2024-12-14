import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  srcImagem: string;
  altImagem: string;
  id: string;
  name: string;
  placeholder: string;
}

export function Input({
  srcImagem,
  altImagem,
  id,
  name,
  placeholder,
  ...props
}: InputProps) {
  return (
    <div className="container-input">
      <img src={srcImagem} alt={altImagem} />
      <input id={id} name={name} placeholder={placeholder} {...props} />
    </div>
  );
}
