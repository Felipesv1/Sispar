import Home_icon from "../../assets/Dashboard/icon_casa_gray.png";
import setinha from "../../assets/Dashboard/seta.png";
import Navbar from "../navbar/NavBar.jsx";
import styles from "./Solicitacao.module.scss";
import icon_plus from "../../assets/solicitacao/+.png";
import icon_delete from "../../assets/solicitacao/deletar.png";
import icon_trash from "../../assets/solicitacao/lixeira.png";
import icon_motivo from "../../assets/solicitacao/motivo.png";
import icon_check from "../../assets/solicitacao/check.png";
import icon_x from "../../assets/solicitacao/x.png";
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
                <input type="text" id="moeda" />
              </div>
              <div className={styles.box_input_dist_km}>
                <label htmlFor="dist_km">Dist / Km</label>
                <input type="text" id="dist_km" />
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
          <section className={styles.container_table}>
            <table className={styles.table_refund_request}>
              <thead>
                <tr>
                  <th></th>
                  <th>Colaborador{"(a)"}</th>
                  <th>Empresa</th>
                  <th>&#8470; Prest. </th>
                  <th>Data</th>
                  <th>Motivo</th>
                  <th>Tipo de Despesa</th>
                  <th>Ctr. Custo</th>
                  <th>Ord. Int.</th>
                  <th>Div.</th>
                  <th>PEP</th>
                  <th>Moeda</th>
                  <th>Dist. Km</th>
                  <th>Valor. Km</th>
                  <th>Val.Faturado</th>
                  <th>Despesa</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <img src={icon_trash} alt="icone de lixeira" />
                </td>
                <td>vitor carvalho</td>
                <td>WSS001</td>
                <td>329456</td>
                <td>12/12/2021</td>
                <td>
                  <img src={icon_motivo} alt="icone de motivo " />
                </td>
                <td>100101011010 - Fin</td>
                <td>0003</td>
                <td>002</td>
                <td>001</td>
                <td>BRL</td>
                <td>434km</td>
                <td>0.65</td>
                <td>242.10</td>
                <td>40.05</td>
                <td>40.05</td>
              </tbody>
            </table>
          </section>
          <section className={styles.container_request}>
            <div className={styles.content_request}>
              <div className={styles.container_total_faturado}>
                <label htmlFor="toral_faturado">Total faturado</label>
                <input
                  className={styles.total}
                  type="text"
                  id="todal_faturado"
                  placeholder="0.00"
                />
              </div>
              <div className={styles.container_total_despesa}>
                <label htmlFor="toral_faturado">Toral despesa</label>
                <input
                  className={styles.total}
                  type="text"
                  id="toral_faturado"
                  placeholder="0.00"
                />
              </div>
              <button className={styles.button_send_analysis}>
                <img src={icon_check} alt="icone de check" />
                <span>Enviar para Análise</span>
              </button>
              <button className={styles.button_cancel}>
                <img src={icon_x} alt="icone de x" />
                <span>Cancelar Solicitação</span>
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
