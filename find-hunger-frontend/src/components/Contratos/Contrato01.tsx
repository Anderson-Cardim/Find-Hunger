import styles from './Contrato01.module.css';
import { MapPin } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface ContratoProps {
  fotoPerfil: string;
  nome: string;
  profissao: string;
  descricao: string;
  preco: string;
  localizacao: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
}

export function Contrato01({
  fotoPerfil,
  nome,
  profissao,
  descricao,
  preco,
  localizacao,
  img1,
  img2,
  img3,
  img4,
  img5,
}: ContratoProps) {
  return (
    <div className={styles.container}>
      <Link to={'/PerfilProfissional/:id'}>
        <div className={styles.divCabeca}>
          <div className={styles.blocoPerfil}>
            <img className={styles.imagemPerfil} src={fotoPerfil} alt="Perfil" />
            <div className={styles.perfilnome}>
              <h5 className={styles.profissao}>{profissao}</h5>
              <h2 className={styles.titulo}>{nome}</h2>
            </div>
          </div>
          <div className={styles.blocodois}>
            <p className={styles.descricao}>{descricao}</p>
            <div className={styles.vl}>
              <h5 className={styles.preco}>{preco}</h5>
              <div className={styles.divlocalizacao}>
                <MapPin className={styles.logo} size={10} />
                <p className={styles.localizacao}>{localizacao}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.img}>
          <div className={styles.imagemPrincipal}>
            <img className={styles.ImagemProdutos} src={img1} alt="1" />
          </div>
          <div className={styles.bloco2}>
            <img className={styles.ImagemProdutos} src={img2} alt="2" />
            <img className={styles.ImagemProdutos} src={img3} alt="3" />
          </div>
          <div className={styles.bloco3}>
            <img className={styles.ImagemProdutos} src={img4} alt="4" />
            <img className={`${styles.ImagemProdutos} ${styles.imagemDireita}`} src={img5} alt="5" />
          </div>
        </div>
      </Link>
    </div>
  );
}
