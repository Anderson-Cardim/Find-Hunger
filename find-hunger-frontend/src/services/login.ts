import { UserLogin } from "../context/authContext";
import { api } from "./api";

export const login = async (data: {
    usuario: string;
    senha: string;
}): Promise<UserLogin | null> => {
  try { 
    const result: UserLogin[] = await api.get("/login").then((res) => res.data);

    const usuario = result?.find((item) => item.usuario === data.usuario && item.senha === data.senha);

    return usuario || null;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export const postLogin = async (data: {
    nome: string;
    usuario: string;
    senha: string;
    tipo: "comerciante" | "cliente"
}): Promise<boolean> => {
  try {
    const result = await api.post("/login", data).then((res) => res.data);

    return !!result;
  } catch (error) {
    console.log(error);
  }
  return false;
}

export const postLoginComerciante = async (data: {
  cpf: string;
  estabelecimento: string;
  numero: string;
  usuario: string;
  senha: string;
  endereco: string;
  descricao: string;
  nome: string;
  tipo: "comerciante" | "cliente"
}): Promise<boolean> => {
try {
  const result = await api.post("/login", data).then((res) => res.data);


  return !!result;
} catch (error) {
  console.log(error);
}
return false;
}
