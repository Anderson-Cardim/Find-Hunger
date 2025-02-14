/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
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
  id?: string;
  cpf: string;
  estabelecimento: string;
  numero: string;
  usuario: string;
  senha: string;
  endereco: string;
  descricao: string;
  imgBanner: string;
  imgPerfil: string;
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


export const putLoginComerciante = async (
  id: string, // Adicionamos o ID como primeiro parâmetro
  data: UserLogin
): Promise<{ success: boolean; message?: string }> => {
  try {
    const response = await api.put(`/login/${id}`, data);
    return { success: true, message: "Cadastro atualizado com sucesso!" };
  } catch (error: any) {
    console.error("Erro ao atualizar cadastro:", error);

    let message = "Erro desconhecido ao atualizar cadastro.";
    if (error.response && error.response.data && error.response.data.message) {
      message = error.response.data.message;
    }

    return { success: false, message };
  }
};
