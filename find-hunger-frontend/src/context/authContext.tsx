import { createContext, ReactNode, useState } from "react";

export type UserLogin = {
  id: string;
  cpf: string;
  estabelecimento: string;
  numero: string;
  usuario: string;
  senha: string;
  endereco: string;
  descricao: string;
  nome: string;
  tipo: "comerciante" | "cliente";
  imagem01: string;
  imagem02: string;
};

export interface AuthContextProps {
  usuario: UserLogin | null;
  handleUsuario: (data: UserLogin) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [usuario, setUsuario] = useState<UserLogin | null>(null);

  const handleUsuario = (data: UserLogin) => {
    setUsuario(data);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        handleUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
