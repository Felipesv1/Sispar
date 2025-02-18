import Navbar from "../navbar/NavBar.jsx";
import style from "./Reembolsos.module.scss";
import Home_icon from "../../assets/Dashboard/icon_casa_gray.png";
import setinha from "../../assets/Dashboard/seta.png";
import image_refund_request from "../../assets/Dashboard/Solicitar_Reembolso.png";
import image_history_request from "../../assets/Dashboard/Solicitar_Histórico.png";
import image_analyzing_verify from "../../assets/Dashboard/Análises.png";
import image_analyzing from "../../assets/Dashboard/N-Análises.png";
import image_request from "../../assets/Dashboard/N-Solicitados.png";
import image_aproved from "../../assets/Dashboard/N-Aprovados.png";
import image_rejected from "../../assets/Dashboard/N-Rejeitados.png";
import image_update from "../../assets/Dashboard/atualizado.png";
import { useNavigate } from "react-router-dom";

export default function Reembolsos() {
  const navigate = useNavigate();

  function section_solicity() {
    navigate("/solicitar-reembolso");
  }
  return (
    <div>
      <Navbar />
      <header className={style.container__header_dashboard}>
        <img src={Home_icon} alt="icon Home" />
        <img src={setinha} alt="seta" />
        <span>Reembolsos</span>
      </header>
      <main className={style.container__main_dashboard}>
        <section className={style.container__dashboard}>
          <div>
            <h1>Sistema de Reembolsos</h1>
            <p>
              Solicite novos pedidos de reembolso, visualize solicitações em
              análise e todo o histórico.
            </p>
          </div>
          <section className={style.container_cards}>
            <div className={style.card} onClick={section_solicity}>
              <img
                src={image_refund_request}
                alt="imagem de solicitar reembolso"
              />
              <p>Solicitar Reembolso</p>
            </div>
            <div className={style.card}>
              <img
                src={image_analyzing_verify}
                alt="imagem de verificar analise"
              />
              <p>Verificar análises</p>
            </div>
            <div className={style.card}>
              <img
                src={image_history_request}
                alt="imagem de solicitar histórico"
              />
              <p>Hístorico</p>
            </div>
          </section>
          <section className={style.data_dashboard}>
            <div className={style.data}>
              <img
                className={style.data__icon_n_request}
                src={image_request}
                alt="icone de solicitação de reembolso"
              />
              <span>
                <b>182</b>
                {""} solicitados
              </span>
            </div>
            <div className={style.data}>
              <img
                className={style.data__icon_n_analyzing}
                src={image_analyzing}
                alt="icone de analise de solicitações"
              />
              <span>
                <b>74</b>
                {""} Em análise
              </span>
            </div>
            <div className={style.data}>
              <img
                className={style.data__icon_n_aproved}
                src={image_aproved}
                alt="icone de aprovação de solicitações"
              />
              <span>
                <b>195</b>
                {""} Aprovados
              </span>
            </div>
            <div className={style.data}>
              <img
                className={style.data__icon_n_rejected}
                src={image_rejected}
                alt="icone de rejeição de solicitações"
              />
              <span>
                <b>41</b>
                {""} Rejeitados
              </span>
            </div>
          </section>
          <div className={style.container_update}>
            <img src={image_update} alt="icone check" />
            <p className={style.check}>Sistema atualizado.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
