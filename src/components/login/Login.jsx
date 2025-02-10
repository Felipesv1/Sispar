import logo from "../../assets/Tela_Login/logo_ws.png";
import styles from "./Login.module.scss";
export default function Login() {
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
            <input type="email" placeholder="Email" id="email" name="email" />
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
            />
            <p>Esqueci minha senha</p>
          </div>
          <div className={styles.container_buttons}>
            <button className={styles.btn_login} type="submit">
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
