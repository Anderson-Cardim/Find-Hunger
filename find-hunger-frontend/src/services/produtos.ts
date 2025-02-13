/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";

interface Produto {
  quantidade: number;
  descricao: string;
  nome: string;
  preco: number;
  imagens: string[];
}

export const postCadastroProduto = async (data: Produto): Promise<boolean> => {
  try {
    if (!data.nome || !data.descricao || !data.quantidade || !data.preco) {
      console.warn("Erro: Nome, descrição e quantidade são obrigatórios.");
      return false;
    }

    if (isNaN(data.preco) || isNaN(data.quantidade)) {
      console.warn("Erro: Preço e quantidade devem ser números válidos.");
      return false;
    }

    if (data.imagens.length === 0) {
      console.warn("Erro: Pelo menos uma imagem é necessária.");
      return false;
    }

    const response = await api.post("/produtosCadastrados", data);
    console.log(response)

    if (response.status === 201) {
      console.log("Produto cadastrado com sucesso!");
      return true;
    } else {
      console.warn("Erro ao cadastrar o produto:", response.data);
      return false;
    }
  } catch (error: any) {
    console.error("Erro ao cadastrar o produto:", error.response?.data || error.message);
    return false;
  }
};
