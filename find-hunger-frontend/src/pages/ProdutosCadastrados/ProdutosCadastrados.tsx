import styles from './ProdutosCadastrados.module.css'
import imgem01 from '../../assets/image.svg'
import {NotePencil} from "phosphor-react";
import {Trash} from "phosphor-react";
import { Produtos } from '../../components/Produtos/Produtos';


export function ProdutosCadastrados() {
    return(
        <div className={styles.containerProdutos}>
            <Produtos
                imagem={imgem01}
                title='Trufas de limão'
                icons={<NotePencil/>}
                quantidade={3}
                preco={12}
                icons02={<Trash/>}
            />
        </div>
    )
}
