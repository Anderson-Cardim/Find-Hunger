export interface ImgObras {
  Img1: string;
  Img2: string;
  Img3: string;
  Img4: string;
  Img5: string;
}

export interface Professional {
  id: number;
  Foto: string;
  Nome: string;
  Profissao: string;
  Descricao: string;
  Preco: string;
  Localizacao: string;
  ImgObras: ImgObras;
}
