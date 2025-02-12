import { useState } from "react";
import image_menu_close from "../../assets/Header/imagem-fechar-header.png";
import history_btn from "../../assets/Header/Botao_Histórico.png";
import image_pefil from "../../assets/Header/image.png";
import home_btn from "../../assets/Header/botao_Home.png";
import logoff from "../../assets/Header/Botao_Sair.png";
import refund_btn from "../../assets/Header/Botao_Reembolso.png";
import search_btn from "../../assets/Header/Botao_Pesquisa.png";
import styles from "./NavBar.module.scss";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className={`${styles.container_header} ${menuOpen ? styles.active : ""}`}
    >
      <button onClick={handleMenu} className={styles.btn_header}>
        <img
          src={image_menu_close}
          alt="imagem de um botão para fechar aba da header"
        />
      </button>
      <section className={styles.container_navbar_section}>
        <div>
          <img src={image_pefil} alt="imagem do perfil" />
        </div>
        <nav className={styles.navbar}>
          <button className={styles.btn_header}>
            <img src={home_btn} alt="botão para navegar para área da home" />
          </button>
          <button className={styles.btn_header}>
            <img
              src={refund_btn}
              alt="botão para navegar para área de reembolso"
            />
          </button>
          <button className={styles.btn_header}>
            <img
              src={search_btn}
              alt="botão para navegar para área de pesquisa"
            />
          </button>
          <button className={styles.btn_header}>
            <img
              src={history_btn}
              alt="botão para navegar para área de histórico"
            />
          </button>
        </nav>
      </section>
      <button className={styles.logoff_btn}>
        <img src={logoff} alt="botao de sair" />
      </button>
    </div>
  );
}
