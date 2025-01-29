import { Professional } from '../../Interfaces/IProfessional';
import data from '../../Json/Contratos.json'

import Foto1 from '../../assets/Profissional-c1.png';
import Foto2 from '../../assets/Profissional-c2.png';
import ImgObra1 from '../../assets/ImagemDeObra1.png';
import ImgObra2 from '../../assets/ImagemDeObra2.png';
import ImgObra3 from '../../assets/ImagemDeObra3.png';
import ImgObra4 from '../../assets/ImagemDeObra4.png';
import ImgObra5 from '../../assets/ImagemDeObra5.png';

import styles from './Contratos.module.css'
import { MapPin } from 'phosphor-react';

interface CardProps {
  foto: string;
  nome: string;
  profissao: string;
  descricao: string;
  preco: string;
  localizacao: string;
  imgObras: {
    Img1: string;
    Img2: string;
    Img3: string;
    Img4: string;
    Img5: string;
  };
}

const updatedData = data.map(item => ({
  ...item,
  Foto: item.Foto.includes('Profissional-c1') ? Foto1 : Foto2,
  ImgObras: {
    Img1: ImgObra1,
    Img2: ImgObra2,
    Img3: ImgObra3,
    Img4: ImgObra4,
    Img5: ImgObra5,
  }
}));

const Card: React.FC<CardProps> = ({
  foto,
  nome,
  profissao,
  descricao,
  preco,
  localizacao,
  imgObras
}) => (
  <div className={styles.container}>
    <div className={styles.divCabeca}>
      <div className={styles.blocoPerfil}>
        <img
          className={styles.imagemPerfil}
          src={foto}
          alt='Perfil'
        />
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
    <div className={styles.imgObras}>
      <div className={styles.imagemPrincipal}>
        <img src={imgObras.Img1} alt="Obra 1" />
      </div>
      <div className={styles.bloco2}>
        <img src={imgObras.Img2} alt="Obra 2" />
        <img src={imgObras.Img3} alt="Obra 3" />
      </div>
      <div className={styles.bloco3}>
        <img src={imgObras.Img4} alt="Obra 4" />
        <img src={imgObras.Img5} alt="Obra 5" />
      </div>
    </div>
  </div>
);

const CardList: React.FC = () => {
  return (
    <div className="card-list">
      {updatedData.map((item: Professional) => (
        <Card
          key={item.id}
          foto={item.Foto}
          nome={item.Nome}
          profissao={item.Profissao}
          descricao={item.Descricao}
          preco={item.Preco}
          localizacao={item.Localizacao}
          imgObras={item.ImgObras}
        />
      ))}
    </div>
  );
};
export function Contratos() {
  return (
    <CardList />
  )
}
