import Home_icon from "../../assets/Dashboard/icon_casa_gray.png";
import setinha from "../../assets/Dashboard/seta.png";
import Navbar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import icon_plus from "../../assets/solicitacao/+.png";
import icon_delete from "../../assets/solicitacao/deletar.png";
export default function Solicitacao() {
  return (
    <div className={styles.container__refund_request_layout}>
      <Navbar />
      <div>
        <header className={styles.container__header_refund_request}>
          <img src={Home_icon} alt="icon Home" />
          <img src={setinha} alt="seta" />
          <span>Reembolsos</span>
          <img src={setinha} alt="seta" />
          <span>Solicitar Reembolso</span>
        </header>
        <main className={styles.container__main_refund_request}>
          <form className={styles.container__form_refund_request}>
            <section className={styles.container__form_first_section}>
              <div className={styles.container_input_name}>
                <label htmlFor="name">Nome Completo</label>
                <input className={styles.name} type="text" id="name" />
              </div>
              <div className={styles.container_input_enterprise}>
                <label htmlFor="empresa">Empresa</label>
                <input className={styles.enterprise} type="text" id="empresa" />
              </div>
              <div className={styles.container_input_account}>
                <label htmlFor="Prest_Contas">&#8470; Prest. Contas</label>
                <input
                  type="number"
                  className={styles.accounts}
                  id="Prest_Contas"
                />
              </div>
              <div className={styles.container_text_description}>
                <label htmlFor="description">
                  Descrição / Motivo de Reembolso
                </label>
                <textarea
                  className={styles.description}
                  name="description"
                  id="description"
                ></textarea>
              </div>
            </section>
            <div className={styles.vertical_bar}></div>
            <section className={styles.container__form_second_section}>
              <div className={styles.box_input_date}>
                <label htmlFor="date">Data</label>
                <input className={styles.date} type="date" id="date" />
              </div>
              <div className={styles.box_type_select_expenses}>
                <label htmlFor="tipo_de_despesa">Tipo de Despesa</label>
                <select name="" id="">
                  <option value="0">Selecionar</option>
                  <option value="1">Alimentação</option>
                  <option value="2">Combustível</option>
                  <option value="3">Condução</option>
                  <option value="4">Estacionamento</option>
                  <option value="5">Viagem admin.</option>
                  <option value="6">Viagem operacional</option>
                  <option value="7">Eventos de representação</option>
                </select>
              </div>
              <div className={styles.box_type_select_cost_center}>
                <label htmlFor="centro_de_custo">Centro de Custo</label>
                <select name="" id="">
                  <option value="0">Selecionar</option>
                  <option value="1">Alimentação</option>
                  <option value="2">Combustível</option>
                  <option value="3">Condução</option>
                  <option value="4">Estacionamento</option>
                  <option value="5">Viagem admin.</option>
                  <option value="6">Viagem operacional</option>
                  <option value="7">Eventos de representação</option>
                </select>
              </div>
              <div className={styles.box_input_Ord_int}>
                <label htmlFor="ord_int">Ord. Int.</label>
                <input type="number" id="Ord_int" />
              </div>
              <div className={styles.box_input_div}>
                <label htmlFor="div">Div.</label>
                <input type="number" id="Div" />
              </div>
              <div className={styles.box_input_pep}>
                <label htmlFor="pep">PEP</label>
                <input type="number" id="PEP" />
              </div>
              <div className={styles.box_input_moeda}>
                <label htmlFor="moeda">Moeda</label>
                <input type="number" id="moeda" />
              </div>
              <div className={styles.box_input_dist_km}>
                <label htmlFor="dist_km">Dist / Km</label>
                <input type="number" id="dist_km" />
              </div>
              <div className={styles.box_input_valor_km}>
                <label htmlFor="valor_km">Valor / Km</label>
                <input type="number" id="valor_km" />
              </div>
              <div className={styles.box_val_faturado}>
                <label htmlFor="val_faturado">Val.Faturado</label>
                <input type="number" id="val_faturado" />
              </div>
              <div className={styles.box_input_despesa}>
                <label htmlFor="despesa">Despesa</label>
                <input type="number" id="despesa" />
              </div>
              <div className={styles.container_salve_delete}>
                <button className={styles.box_button_save}>
                  <img src={icon_plus} alt="icone de salvar" />
                  <span>Salvar</span>
                </button>
                <button className={styles.box_button_delete}>
                  <img src={icon_delete} alt="icone de deletar" />
                </button>
              </div>
            </section>
          </form>
        </main>
      </div>
    </div>
  );
}
