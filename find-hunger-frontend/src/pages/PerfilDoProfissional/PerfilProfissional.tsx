import { useEffect, useState } from "react";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import styles from "./PerfilProfissional.module.css";
import data from "../../Json/PerfilProfissional.json";
import { Empresa } from "../../Interfaces/ITypesProfissional";
import { FaMotorcycle, FaStar } from "react-icons/fa";

import ImgTemporariaBolo from '../../assets/ImgTemporariaBolo.jpg';
import ImgTemporariaLogo from '../../assets/ImgTemporariaLogo.jpg'
import { Bank, CaretRight, Clock, Info } from "@phosphor-icons/react";
import { MdOutlinePhonelinkRing } from "react-icons/md";

const Modal: React.FC<{ showModal: boolean, onClose: () => void }> = ({ showModal, onClose }) => {
  return (
    <div className={`${styles.modal} ${showModal ? styles.show : ''}`}>
      <div className={`${styles.modalContent} ${styles.corpoModal}`}>
        <p>Este é um modal que aparece na parte inferior do site.</p>
        <button className={styles.closeButton} onClick={onClose}>
          fechar
        </button>
      </div>
    </div>
  );
};

export function PerfilProfissional() {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      const updatedData = data.map((item) => {
        const FotoBanner = item.FotoBanner === "ImgTemporariaBolo" ? ImgTemporariaBolo : "";
        const FotoPerfil = item.FotoPerfil === "ImgTemporariaLogo" ? ImgTemporariaLogo : "";
        return { ...item, FotoBanner, FotoPerfil };
      });
      setEmpresas(updatedData);
    };

    loadImages();
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <body>
        <header>
          <HeaderPrincipal />
        </header>

        <main className={styles.corpo}>
          <div>
            {empresas.map((item) => (
              <div key={item.id}>
                <div className={styles.Banner}>
                  <img className={`${styles.imgBanner}`} src={item.FotoBanner} alt="Banner..." />
                </div>
                <div className={styles.cabecaDaEmpresa}>
                  <div className={styles.TituloAvaliacao}>
                    <button className={styles.avaliacao}> <FaStar className={styles.estrela} /> {item.Avaliacao} <CaretRight className={styles.setaAvaliacao} size={18} color="#ffffff" /></button>
                    <h3 className={styles.Titulo}>{item.NomeDaEmpresa}</h3>
                    <div className={styles.divInfo}>
                      <Info size={18} className={styles.LogoInfo} />
                      <p className={styles.paragrafoInfo}>infos da loja</p>
                      <CaretRight className={styles.setaInfo} />
                    </div>
                  </div>
                  <div className={styles.divFotoPerfil}>
                    <img className={styles.fotoPerfil} src={item.FotoPerfil} alt="Perfil" />
                    <p className={styles.paragrafoHora}>Abre as {item.HorarioAberto}</p>
                  </div>
                </div>
                <div className={styles.divComplemento}>
                  <div className={styles.Entrega}>
                    <div className={styles.cabecaEntrega}>
                      <FaMotorcycle className={styles.logoMoto} />
                      <h3 className={styles.tituloEntrega}>{item.Entrega}</h3>
                    </div>
                    <p>Entrega</p>
                  </div>
                  <div className={styles.Minuto}>
                    <div className={styles.cabecaMinutosEntrega}>
                      <Clock size={18} />
                      <h3 className={styles.tituloMinutos}>{item.TempoDeEntrega}</h3>
                    </div>
                    <p>Minutos</p>
                  </div>
                  <div className={styles.DivPagamentos} onClick={toggleModal}>
                    <div className={styles.cabecaPagamento}>
                      <MdOutlinePhonelinkRing className={styles.logoCelular} size={20} />
                      <Bank className={styles.logoBank} size={20} />
                    </div>
                    <p>Pagamento</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Modal showModal={showModal} onClose={toggleModal} />
        </main>

        <footer>
          <FooterPrincipal />
        </footer>
      </body>
    </>
  );
}

{/* <Link to="/PaginaSecundaria" className={styles.LinkIconi}>
  <i className={styles.Iconi}>
    <CaretLeft size={32} />
  </i>
</Link> */}