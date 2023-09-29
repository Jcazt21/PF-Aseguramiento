import { FunctionComponent } from "react";
import UniTechCard from "../components/UniTechCard";
import styles from "./HU06RecuperarContrasea.module.css";
const HU06RecuperarContrasea: FunctionComponent = () => {
  return (
    <div className={styles.hu06RecuperarContrasea}>
      <b className={styles.reestablecimientoDeContrase1}>
        Reestablecimiento de Contraseña
      </b>
      <div className={styles.introduzcaSuId1}>
        Introduzca su Id institucional
      </div>
      <b className={styles.iniciarSesion}>INICIAR SESION</b>
      <UniTechCard propTop="322px" propLeft="840px" />
      <div className={styles.viewAllButton1}>
        <img
          className={styles.viewAllButtonChild}
          alt=""
          src="/undefined2.png"
        />
        <div className={styles.recuperar}>Recuperar</div>
      </div>
      <div className={styles.hu06RecuperarContraseaChild} />
    </div>
  );
};

export default HU06RecuperarContrasea;
