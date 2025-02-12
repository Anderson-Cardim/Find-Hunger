import { useEffect, useRef, useState } from "react";
import { FooterPrincipal } from "../../components/FooterPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/HeaderPrincipal/HeaderPrincipal";
import styles from "./PerfilProfissional.module.css";
import data from "../../Json/PerfilProfissional.json";
import { Empresa } from "../../Interfaces/ITypesProfissional";
import { FaMotorcycle, FaStar } from "react-icons/fa";

import ImgTemporariaBolo from '../../assets/ImgTemporariaBolo.jpg';
import ImgTemporariaLogo from '../../assets/ImgTemporariaLogo.jpg'
import { Bank, CaretRight, Clock, CreditCard, Info } from "@phosphor-icons/react";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { SiNubank } from "react-icons/si";
import { FaPix } from "react-icons/fa6";
import { PiMoneyBold } from "react-icons/pi";

const Modal: React.FC<{ showModal: boolean, onClose: () => void }> = ({ showModal, onClose }) => {
  const startY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY.current > 50) {
      onClose();
    }
  };

  return (
    <div
      className={`${styles.modal} ${showModal ? styles.show : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.modalContent}>
        <div className={styles.barraModal}></div>
        <h3 className={styles.tituloModal}>formas de pagamento</h3>
        <div className={styles.formasDePagamento}>
          <div className={styles.formaPeloApp}>
            <h3 className={styles.subTitulo}>A pagar</h3>
            <div className={styles.pagamentos}>
              <div className={styles.divNubank}>
                <SiNubank className={styles.logoNubank} />
                <p>Nubank</p>
              </div>
              <div className={styles.divPix}>
                <FaPix className={styles.logoPix} />
                <p>Pix</p>
              </div>
              <div className={styles.divPagamentoOnline}>
                <CreditCard size={24} color="#6b2691" className={styles.logoPagamentoOnline} />
                <p>Cartão Crédito/Debito</p>
              </div>
              <div className={styles.divDinheiro}>
                <PiMoneyBold className={styles.logoDinheiro} />
                <p>Dinheiro</p>
              </div>
            </div>
          </div>
        </div>
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
