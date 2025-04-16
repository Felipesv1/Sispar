import { useEffect, useState } from "react";
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
import API from "../../services/Api.jsx";
export default function Solicitacao() {
  const [colaborador, setColaborador] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nPrestacao, setnPrestacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  // const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipoReembolso, setTipoReembolso] = useState("");
  const [centroCusto, setCentroCusto] = useState("");
  const [ordemInterna, setorOrdemInterna] = useState("");
  const [divisao, setDivisao] = useState("");
  const [pep, setPep] = useState("");
  const [moeda, setMoeda] = useState("");
  const [distanciaKm, setDistanciaKm] = useState("");
  const [valorKm, setValorKm] = useState("");
  const [valorFaturado, setValorFaturado] = useState("");
  const [despesa, setDespesa] = useState("");
  const [dadosReembolso, setDadosReembolso] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const novoReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      centroCusto,
      ordemInterna,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa,
    };
    setDadosReembolso([...dadosReembolso, novoReembolso]);
    clean_input();
  };
  const clean_input = () => {
    setColaborador("");
    setEmpresa("");
    setnPrestacao("");
    setDescricao("");
    setData("");
    setTipoReembolso("");
    setCentroCusto("");
    setorOrdemInterna("");
    setDivisao("");
    setPep("");
    setMoeda("");
    setDistanciaKm("");
    setValorKm("");
    setValorFaturado("");
    setDespesa("");
  };

  const [formWasSend, setformWasSend] = useState(false);

  const sendforAnlysis = async () => {
    try {
      const res = await API.post("/solicitacao", dadosReembolso);
      setformWasSend(true);
      alert("Dados enviados com sucesso!");
      console.log("Dados enviados com sucesso:", res.data);
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
    }
  };
  useEffect(() => {
    if (formWasSend) {
      setDadosReembolso([]);
      setformWasSend(false);
    }
  }, [formWasSend]);
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
          <form
            onSubmit={(e) => e.preventDefault()}
            className={styles.container__form_refund_request}
          >
            <section className={styles.container__form_first_section}>
              <div className={styles.container_input_name}>
                <label htmlFor="name">Nome Completo</label>
                <input
                  className={styles.name}
                  onChange={(e) => setColaborador(e.target.value)}
                  type="text"
                  id="name"
                  value={colaborador}
                />
              </div>
              <div className={styles.container_input_enterprise}>
                <label htmlFor="empresa">Empresa</label>
                <input
                  className={styles.enterprise}
                  onChange={(e) => setEmpresa(e.target.value)}
                  type="text"
                  id="empresa"
                  value={empresa}
                />
              </div>
              <div className={styles.container_input_account}>
                <label htmlFor="Prest_Contas">&#8470; Prest. Contas</label>
                <input
                  type="number"
                  className={styles.accounts}
                  id="Prest_Contas"
                  onChange={(e) => setnPrestacao(e.target.value)}
                  value={nPrestacao}
                />
              </div>
              <div className={styles.container_text_description}>
                <label htmlFor="description">
                  Descrição / Motivo de Reembolso
                </label>
                <textarea
                  className={styles.description}
                  onChange={(e) => setDescricao(e.target.value)}
                  name="description"
                  id="description"
                  value={descricao}
                ></textarea>
              </div>
            </section>
            <div className={styles.vertical_bar}></div>
            <section className={styles.container__form_second_section}>
              <div className={styles.box_input_date}>
                <label htmlFor="date">Data</label>
                <input
                  className={styles.date}
                  onChange={(e) => setData(e.target.value)}
                  value={data}
                  type="date"
                  id="date"
                />
              </div>
              <div className={styles.box_type_select_expenses}>
                <label htmlFor="tipo_de_despesa">Tipo de Despesa</label>
                <select
                  name=""
                  id=""
                  onChange={(e) => setTipoReembolso(e.target.value)}
                  value={tipoReembolso}
                >
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
                <select
                  name=""
                  id=""
                  onChange={(e) => setCentroCusto(e.target.value)}
                  value={centroCusto}
                >
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
                <input
                  type="number"
                  id="Ord_int"
                  onChange={(e) => setorOrdemInterna(e.target.value)}
                  value={ordemInterna}
                />
              </div>
              <div className={styles.box_input_div}>
                <label htmlFor="div">Div.</label>
                <input
                  type="number"
                  id="Div"
                  onChange={(e) => setDivisao(e.target.value)}
                  value={divisao}
                />
              </div>
              <div className={styles.box_input_pep}>
                <label htmlFor="pep">PEP</label>
                <input
                  type="number"
                  id="PEP"
                  onChange={(e) => setPep(e.target.value)}
                  value={pep}
                />
              </div>
              <div className={styles.box_input_moeda}>
                <label htmlFor="moeda">Moeda</label>
                <input
                  type="text"
                  id="moeda"
                  onChange={(e) => setMoeda(e.target.value)}
                  value={moeda}
                />
              </div>
              <div className={styles.box_input_dist_km}>
                <label htmlFor="dist_km">Dist / Km</label>
                <input
                  type="text"
                  id="dist_km"
                  onChange={(e) => setDistanciaKm(e.target.value)}
                  value={distanciaKm}
                />
              </div>
              <div className={styles.box_input_valor_km}>
                <label htmlFor="valor_km">Valor / Km</label>
                <input
                  type="number"
                  id="valor_km"
                  onChange={(e) => setValorKm(e.target.value)}
                  value={valorKm}
                />
              </div>
              <div className={styles.box_val_faturado}>
                <label htmlFor="val_faturado">Val.Faturado</label>
                <input
                  type="number"
                  id="val_faturado"
                  onChange={(e) => setValorFaturado(e.target.value)}
                  value={valorFaturado}
                />
              </div>
              <div className={styles.box_input_despesa}>
                <label htmlFor="despesa">Despesa</label>
                <input
                  type="number"
                  id="despesa"
                  onChange={(e) => setDespesa(e.target.value)}
                  value={despesa}
                />
              </div>
              <div className={styles.container_salve_delete}>
                <button
                  className={styles.box_button_save}
                  onClick={handleSubmit}
                >
                  <img src={icon_plus} alt="icone de salvar" />
                  <span>Salvar</span>
                </button>
                <button
                  className={styles.box_button_delete}
                  onClick={clean_input}
                >
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
                {dadosReembolso.map((item, index) => (
                  <tr key={index}>
                    <td>
                      {" "}
                      <img src={icon_trash} alt="icone de lixeira" />
                    </td>
                    <td> {item.colaborador} </td>
                    <td> {item.empresa} </td>
                    <td>{item.nPrestacao}</td>
                    <td>{item.data}</td>
                    <td>
                      <img src={icon_motivo} alt="icone de motivo " />{" "}
                    </td>
                    <td>{item.tipoReembolso}</td>
                    <td>{item.centroCusto}</td>
                    <td>{item.ordemInterna}</td>
                    <td>{item.divisao}</td>
                    <td>{item.pep}</td>
                    <td>{item.moeda}</td>
                    <td>{item.distanciaKm}</td>
                    <td>{item.valorKm}</td>
                    <td>{item.valorFaturado}</td>
                    <td>{item.despesa}</td>
                  </tr>
                ))}
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
                <img
                  src={icon_check}
                  alt="icone de check"
                  onClick={() => sendforAnlysis()}
                />
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
