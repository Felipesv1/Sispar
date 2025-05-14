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
import { ToastContainer, toast } from "react-toastify";

export default function Solicitacao() {
  const [colaborador, setColaborador] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [num_prestacao, setNum_prestacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  // const [motivo, setMotivo] = useState(""); // Estado para o campo motivo  //ESSE ESTADO É PARA QUEM TÁ FAZENDO AVANÇADO UTILIZANDO MODAL
  const [tipo_reembolso, setTipo_reembolso] = useState("");
  const [centro_custo, seTcentro_custo] = useState("");
  const [ordem_interna, setordem_interna] = useState("");
  const [divisao, setDivisao] = useState("");
  const [pep, setPep] = useState("");
  const [moeda, setMoeda] = useState("");
  const [distancia_km, setdistancia_km] = useState("");
  const [valor_km, setvalor_km] = useState("");
  const [valor_faturado, setvalor_faturado] = useState("");
  const [despesa, setDespesa] = useState("");
  const [dadosReembolso, setDadosReembolso] = useState([]);

  const notifySucess = () =>
    toast.success("Dados enviados com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoReembolso = {
      colaborador,
      empresa,
      num_prestacao,
      descricao,
      data,
      tipo_reembolso,
      centro_custo,
      ordem_interna,
      divisao,
      pep,
      moeda,
      distancia_km,
      valor_km,
      valor_faturado,
      despesa,
    };

    setDadosReembolso([...dadosReembolso, novoReembolso]);
    clean_input();
  };

  const clean_input = () => {
    setColaborador("");
    setEmpresa("");
    setNum_prestacao("");
    setDescricao("");
    setData("");
    setTipo_reembolso("");
    centro_custo("");
    setordem_interna("");
    setDivisao("");
    setPep("");
    setMoeda("");
    setdistancia_km("");
    setvalor_km("");
    setvalor_faturado("");
    setDespesa("");
  };

  const [formWasSend, setformWasSend] = useState(false);

  const sendforAnlysis = async () => {
    try {
      const res = await API.post(
        "reembolso/solicitar-reembolsos",
        dadosReembolso
      );
      setformWasSend(true);
      notifySucess();
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
      <ToastContainer />
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
                  onChange={(e) => setNum_prestacao(e.target.value)}
                  value={num_prestacao}
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
                  onChange={(e) => setTipo_reembolso(e.target.value)}
                  value={tipo_reembolso}
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
                  onChange={(e) => seTcentro_custo(e.target.value)}
                  value={centro_custo}
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
                  onChange={(e) => setordem_interna(e.target.value)}
                  value={ordem_interna}
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
                <select
                  name=""
                  id=""
                  onChange={(e) => setMoeda(e.target.value)}
                  value={moeda}
                >
                  <option value="0">Selecionar</option>
                  <option value="1">Real</option>
                  <option value="2">Dólar</option>
                  <option value="3">Euro</option>
                </select>
              </div>
              <div className={styles.box_input_dist_km}>
                <label htmlFor="dist_km">Dist / Km</label>
                <input
                  type="text"
                  id="dist_km"
                  onChange={(e) => setdistancia_km(e.target.value)}
                  value={distancia_km}
                />
              </div>
              <div className={styles.box_input_valor_km}>
                <label htmlFor="valor_km">Valor / Km</label>
                <input
                  type="number"
                  id="valor_km"
                  onChange={(e) => setvalor_km(e.target.value)}
                  value={valor_km}
                />
              </div>
              <div className={styles.box_val_faturado}>
                <label htmlFor="val_faturado">Val.Faturado</label>
                <input
                  type="number"
                  id="val_faturado"
                  onChange={(e) => setvalor_faturado(e.target.value)}
                  value={valor_faturado}
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
                    <td>{item.ordem_interna}</td>
                    <td>{item.divisao}</td>
                    <td>{item.pep}</td>
                    <td>{item.moeda}</td>
                    <td>{item.distancia_km}</td>
                    <td>{item.valor_km}</td>
                    <td>{item.valor_faturado}</td>
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
                <label htmlFor="toral_faturado">Total despesa</label>
                <input
                  className={styles.total}
                  type="text"
                  id="toral_faturado"
                  placeholder="0.00"
                />
              </div>
              <button
                className={styles.button_send_analysis}
                onClick={() => sendforAnlysis()}
              >
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
