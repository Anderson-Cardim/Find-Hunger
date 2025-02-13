/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "./api";

interface Produto {
  quantidade: string;
  descricao: string;
  nome: string;
  preco: string;
//   imagens: File[]; // Agora permite várias imagens
}

export const postCadastroProduto = async (data: Produto): Promise<boolean> => {
  try {
    if (!data.nome || !data.descricao || !data.quantidade) {
      console.warn("Erro: Nome, descrição e quantidade são obrigatórios.");
      return false;
    }

    const formData = new FormData();
    formData.append("preco", data.preco);
    formData.append("quantidade", data.quantidade);
    formData.append("descricao", data.descricao);
    formData.append("nome", data.nome);

    // Adicionando múltiplas imagens ao FormData
    // data.imagens.forEach((imagem) => {
    //   formData.append(`imagens`, imagem); // O backend deve aceitar múltiplas imagens no mesmo campo
    // });

    const response = await api.post("/produtosCadastrados", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
