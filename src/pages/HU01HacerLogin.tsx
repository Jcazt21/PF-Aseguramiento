import { FunctionComponent } from "react";
import styles from "./HU01HacerLogin.module.css";
const HU01HacerLogin: FunctionComponent = () => {
  return (
    <div className={styles.hu01HacerLogin}>
      <div className={styles.id}>ID</div>
      <div className={styles.contrasea}>Contraseña</div>
      <b className={styles.iniciarSesion}>INICIAR SESION</b>
      <button className={styles.recuperarContrasea1}>
        Recuperar Contraseña
      </button>
      <a className={styles.whatsappImage20230908At2Parent}>
        <img
          className={styles.whatsappImage20230908At2}
          alt=""
          src="/undefined.png"
        />
        <h2 className={styles.unitech}>UniTech</h2>
      </a>
      <div className={styles.viewAllButton1}>
        <button className={styles.vectorParent}>
          <img className={styles.groupChild} alt="" src="/undefined1.png" />
          <div className={styles.iniciaSesion}>Inicia sesion</div>
        </button>
      </div>
      <input className={styles.hu01HacerLoginChild} type="text" />
      <input className={styles.hu01HacerLoginItem} type="text" />
    </div>
  );
};

export default HU01HacerLogin;
