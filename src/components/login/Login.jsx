import logo from "../../assets/Tela_Login/logo_ws.png";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
import Api from "../../services/Api";
import { useState } from "react";
export default function Login() {
  const navigate = useNavigate();

  function loggIn_section_refund() {
    navigate("/reembolso");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await Api.post("/colaborador/login", {
        email: email,
        senha: password,
      });
      console.log(response.data);
      loggIn_section_refund();
      // Handle the response as needed
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
      // Handle the error as needed
    }
  };
  return (
    <main className={styles.container}>
      <section className={styles.container_img}></section>
      <section className={styles.container_login}>
        <img src={logo} alt="imagem da logo da wilson sons" />
        <h1>Boas vindas ao Novo Portal SISPAR</h1>
        <p className={styles.sub_title}>
          Sistema de Emissão de Boletos e Parcelamento
        </p>
        <form action="">
          <div className={styles.container_inputs}>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <p>Esqueci minha senha</p>
          </div>
          <div className={styles.container_buttons}>
            <button onClick={login} className={styles.btn_login} type="submit">
              Entrar
            </button>
            <button className={styles.btn_create} type="submit">
              Criar conta
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
