import { useRef, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FooterPrincipal } from "../../components/footerPrincipal/FooterPrincipal";
import { HeaderPrincipal } from "../../components/headerPrincipal/HeaderPrincipal";
import styles from "./PerfilProfissional.module.css";
import data from "../../Json/PerfilProfissional.json";
import { Empresa } from "../../Interfaces/ITypesProfissional";

import { Bank, CaretRight, CreditCard, Info } from "@phosphor-icons/react";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaPix } from "react-icons/fa6";
import { PiMoneyBold } from "react-icons/pi";

type ParamTypes = {
  id: string;
}

interface NovoProdutosProps {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: string;
  disponibilidade: boolean;
  imagem: string;
}

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
            <div className={styles.divAPagar}>
              <MdOutlinePhonelinkRing className={styles.logoAPagar} />
              <h3 className={styles.subTitulo}>A pagar</h3>
            </div>
            <div className={styles.pagamentos}>
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
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams<ParamTypes>();
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  
  useEffect(() => {
    if (id) {
      const empresaId = parseInt(id, 10);
      console.log(`Procurando empresa com ID: ${empresaId}`);
      const empresaEncontrada = data.find((empresa) => empresa.id === empresaId);
      if (empresaEncontrada) {
        console.log(`Empresa encontrada: ${JSON.stringify(empresaEncontrada)}`);
        setEmpresa(empresaEncontrada);
      } else {
        console.log("Empresa não encontrada");
        setEmpresa(null);
      }
    }
  }, [id]);


  const toggleModal = () => {
    setShowModal(!showModal);
  };

  if (!empresa) {
    return <p>Perfil não encontrado...</p>;
  }

  return (
    <body>
      <header>
        <HeaderPrincipal />
      </header>

      <main className={styles.corpo}>
        <div className={styles.Banner}>
          <img className={`${styles.imgBanner}`} src={empresa.FotoBanner} alt="Banner..." />
        </div>
        <div className={styles.cabecaDaEmpresa}>
          <div className={styles.TituloAvaliacao}>
            <h3 className={styles.Titulo}>{empresa.NomeDaEmpresa}</h3>
            <div className={styles.divInfo}>
              <Info size={18} className={styles.LogoInfo} />
              <p className={styles.paragrafoInfo}>infos da loja</p>
              <CaretRight className={styles.setaInfo} />
            </div>
          </div>
          <div className={styles.divFotoPerfil}>
            <img className={styles.fotoPerfil} src={empresa.FotoPerfil} alt="Perfil" />
            <p className={styles.paragrafoHora}>Abre às {empresa.HorarioAberto}</p>
          </div>
        </div>
        <div className={styles.divComplemento}>
          <div className={styles.DivPagamentos} onClick={toggleModal}>
            <div className={styles.cabecaPagamento}>
              <MdOutlinePhonelinkRing className={styles.logoCelular} size={20} />
              <Bank className={styles.logoBank} size={20} />
            </div>
            <p>Pagamento</p>
          </div>
        </div>
        <Modal showModal={showModal} onClose={toggleModal} />
      </main >
      <FooterPrincipal />
    </body>
  );
}


{/* <Link to="/PaginaSecundaria" className={styles.LinkIconi}>
  <i className={styles.Iconi}>
    <CaretLeft size={32} />
  </i>
</Link> */}