import { BannerPrincipal } from '../../components/BannerPrincipal/BannerPrincipal'
import { FooterPrincipal } from '../../components/FooterPrincipal/FooterPrincipal'
import { HeaderPrincipal } from '../../components/HeaderPrincipal/HeaderPrincipal'
import { InputPesquisar } from '../../components/InputPesquisar/InputPesquisar'
import ImagemPrincipalBanner from '../../assets/BannerPrincipal1-temporario.png'

import styles from './Step2.module.css'
import { Carrosel } from '../../components/Carrossel1/Carrosel'

export function Step2() {
  return (
    <>
    <body>
      <header>
        <HeaderPrincipal />
      </header>
      <main className={styles.corpo}>
        <InputPesquisar />
        <BannerPrincipal img={ImagemPrincipalBanner} />
        <Carrosel />
      </main>
      <footer>
        <FooterPrincipal />
      </footer>
    </body>
    </>
  )
}