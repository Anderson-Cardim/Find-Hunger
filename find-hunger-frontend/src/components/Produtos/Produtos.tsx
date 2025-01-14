import styles from './Produtos.module.css'
import { ReactNode } from "react";

interface Produto{
    imagem: string;
    title: string;
    icons?: ReactNode; 
    quantidade: number;
    preco: number;
    icons02?: ReactNode; 
}

export function Produtos({
    imagem,
    title,
    icons,
    quantidade,
    preco,
    icons02,
    ...props
  }: Produto) {
    return (
        <div className={styles.ContainerProdutos} {...props}>
            <div className={styles.ContainerImagem}>
                <img src={imagem} alt="" />
            </div>
            <div className={styles.ContainerConteudo}>
                <h5>{title}</h5>
                <i>{icons}</i>
                <h6 className={styles.subTitulos}>Quantidade disponível: {quantidade}</h6>
                <h6 className={styles.subTitulos}>R${preco} por unidade</h6>
                <h6 className={styles.subTitulos}>Oferta do produto: </h6>
                <i className={styles.lixeira}>{icons02}</i>
            </div>
        </div>
    )
}