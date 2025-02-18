import Home_icon from "../../assets/Dashboard/icon_casa_gray.png";
import setinha from "../../assets/Dashboard/seta.png";
import Navbar from "../navbar/NavBar.jsx";
import style from "./Solicitacao.module.scss";
export default function Solicitacao() {
  return (
    <div>
      <Navbar />
      <header className={style.container__header_refund}>
        <img src={Home_icon} alt="icon Home" />
        <img src={setinha} alt="seta" />
        <span>Reembolsos</span>
        <img src={setinha} alt="seta" />
        <span>Solicitar Reembolso</span>
      </header>
      <main className={style.container__main_refund}>
        <form>
          <section className={style.container__form_first_section}>
            <div className={style.container__form_first_div__input}>
              <div>
                <label htmlFor="name">Nome Completo</label>
                <input className={style.name} type="text" id="name" />
              </div>
              <div>
                <label htmlFor="empresa">Empresa</label>
                <input className={style.enterprise} type="text" id="empresa" />
              </div>
              <div>
                <label htmlFor="Prest_Contas">N Prest. Contas</label>
                <input
                  type="number"
                  className={style.accounts}
                  id="Prest_Contas"
                />
              </div>
            </div>
            <div className={style.container__desscription}>
              <label htmlFor="description">
                Descrição / Motivo de Reembolso
              </label>
              <input type="text" id="description" />
            </div>
          </section>
          <div className={style.border}>
            <span></span>
          </div>
        </form>
      </main>
    </div>
  );
}
