import { FunctionComponent } from "react";
import UniTechCard from "./UniTechCard";
import styles from "./HU01HacerLoginVersionDe.module.css";
const HU01HacerLoginVersionDe: FunctionComponent = () => {
  return (
    <div className={styles.hu01HacerLoginVersionDe}>
      <div className={styles.id}>ID</div>
      <div className={styles.contrasea}>Contraseña</div>
      <b className={styles.iniciarSesion}>INICIAR SESION</b>
      <b className={styles.recuperarContrasea}>Recuperar Contraseña</b>
      <UniTechCard propTop="134px" propLeft="360px" />
      <div className={styles.viewAllButton1}>
        <img
          className={styles.viewAllButtonChild}
          alt=""
          src="/undefined3.png"
        />
        <div className={styles.iniciaSesion}>Inicia sesion</div>
      </div>
      <div className={styles.hu01HacerLoginVersionDeChild} />
      <div className={styles.hu01HacerLoginVersionDeItem} />
    </div>
  );
};

export default HU01HacerLoginVersionDe;
