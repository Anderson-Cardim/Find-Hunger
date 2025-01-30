import { api } from "./api";

export interface PerfilProfissionalApiResponse {
  id: number;
  nome: string;
  urlImagem: string;
}

export const getProfissionalById = async (id: number): Promise<PerfilProfissionalApiResponse | null> => {
  try {
    const result = await api.get(`/comerciantes/${id}`).then((res) => res.data);
    return result;
  } catch (error) {
    console.log(error);
  }
  return null;
}

export const getProfissionais = async (): Promise<PerfilProfissionalApiResponse[]> => {
  try {
    const result = await api.get("/comerciantes").then((res) => res.data);
    return result;
  } catch (error) {
    console.log(error);
  }
  return [];
}