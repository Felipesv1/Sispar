import Navbar from "../navbar/Navbar.jsx";
import style from "./Reembolsos.module.scss";
import Home_icon from "../../assets/Dashboard/icon_Home.png";
import image_refund_request from "../../assets/Dashboard/Solicitar_Reembolso.png";
import n_request from "../../assets/Dashboard/N-Solicitados.png";
export default function Reembolsos() {
  return (
    <section>
      <Navbar />
      <div className={style.container__title}>
        <img src={Home_icon} alt="icon Home" />
        <span>Reembolsos</span>
      </div>
      <main>
        <section className={style.container__dashboard}>
          <h1>Sistema de Reembolsos</h1>
          <p>
            Solicite novos pedidos de reembolso, visualize solicitações em
            análise e todo o histórico.
          </p>
          <section className={style.container_cards}>
            <div className={style.card}>
              <img
                src={image_refund_request}
                alt="imagem de solicitar reembolso"
              />
              <p>Solicitar Reembolso</p>
            </div>
            <div className={style.card}>
              <img
                src={image_refund_request}
                alt="imagem de solicitar reembolso"
              />
              <p>Solicitar Reembolso</p>
            </div>
            <div className={style.card}>
              <img
                src={image_refund_request}
                alt="imagem de solicitar reembolso"
              />
              <p>Solicitar Reembolso</p>
            </div>
          </section>
          <section className={style.data_dashboard}>
            <div className={style.data}>
              <div>
                <img
                  src={n_request}
                  alt="seta indicando o numero de solicitações"
                />
              </div>
              <span>
                <b>182</b>
                {""} solicitados
              </span>
            </div>
            <div className={style.data}>
              <div>
                <img
                  src={n_request}
                  alt="seta indicando o numero de solicitações"
                />
              </div>
              <span>
                <b>182</b>
                {""} solicitados
              </span>
            </div>
            <div className={style.data}>
              <div>
                <img
                  src={n_request}
                  alt="seta indicando o numero de solicitações"
                />
              </div>
              <span>
                <b>182</b>
                {""} solicitados
              </span>
            </div>
            <div className={style.data}>
              <div>
                <img
                  src={n_request}
                  alt="seta indicando o numero de solicitações"
                />
              </div>
              <span>
                <b>182</b>
                {""} solicitados
              </span>
            </div>
          </section>
          <p></p>
        </section>
      </main>
    </section>
  );
}
