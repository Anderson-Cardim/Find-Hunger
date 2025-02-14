import { Professional } from '../../Interfaces/IProfessional';
import data from '../../Json/Contratos.json'
import Foto1 from '../../assets/Profissional-c1.png';
import Foto2 from '../../assets/Profissional-c2.png';
import imagemPipoca01 from '../../assets/imgPipoca01.jpg';
import imagemPipoca02 from '../../assets/imgPipoca02.jpg';

import imagemPipoca05 from '../../assets/imgPipoca05.jpg';
import styles from './Contratos.module.css'
import { MapPin } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface CardProps {
  foto: string;
  nome: string;
  profissao: string;
  descricao: string;
  preco: string;
  localizacao: string;
  img: {
    Img1: string;
  Img2: string;
  Img3: string;
  Img4: string;
  Img5: string;
  Img6: string;
  Img7: string;
  Img8: string;
  Img9: string;
  Img10: string;
  Img11: string;
  Img12: string;
  Img13: string;
  Img14: string;
  Img15: string;
  };
}

const updatedData = data.map(item => ({
  ...item,
  Foto: item.Foto.includes('Profissional-c1') ? Foto1 : Foto2,
  Img: {
    Img1: imagemPipoca01,
    Img2: imagemPipoca02,
    Img3: imagemPipoca02,
    Img4: imagemPipoca02,
    Img5: imagemPipoca05,
    Img6: imagemPipoca05,
    Img7: imagemPipoca05,
    Img8: imagemPipoca05,
    Img9: imagemPipoca05,
    Img10: imagemPipoca05,
    Img11: imagemPipoca05,
    Img12: imagemPipoca05,
    Img13: imagemPipoca05,
    Img14: imagemPipoca05,
    Img15: imagemPipoca05,
  }
}));

const Card: React.FC<CardProps> = ({
  foto,
  nome,
  profissao,
  descricao,
  preco,
  localizacao,
  img
}) => (
  <div className={styles.container}>
    <Link to={'/PerfilProfissional'}>

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
      <div className={styles.img}>
        <div className={styles.imagemPrincipal}>
          <img src={img.Img1} alt="Obra 1" />
        </div>
        <div className={styles.bloco2}>
          <img src={img.Img2} alt="Obra 2" />
          <img src={img.Img3} alt="Obra 3" />
        </div>
        <div className={styles.bloco3}>
          <img src={img.Img4} alt="Obra 4" />
          <img src={img.Img5} alt="Obra 5" />
        </div>
      </div>
    </Link>
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
          img={item.Img}
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
