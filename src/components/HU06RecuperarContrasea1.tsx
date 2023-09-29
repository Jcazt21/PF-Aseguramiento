import { FunctionComponent } from "react";
import UniTechCard from "./UniTechCard";
import styles from "./HU06RecuperarContrasea1.module.css";
const HU06RecuperarContrasea1: FunctionComponent = () => {
  return (
    <div className={styles.hu06RecuperarContrasea}>
      <b className={styles.reestablecimientoDeContrase1}>
        Reestablecimiento de Contraseña
      </b>
      <div className={styles.introduzcaSuId1}>
        Introduzca su Id institucional correctamente
      </div>
      <b className={styles.iniciarSesion}>INICIAR SESION</b>
      <UniTechCard />
      <div className={styles.viewAllButton1}>
        <img
          className={styles.viewAllButtonChild}
          alt=""
          src="/undefined3.png"
        />
        <div className={styles.recuperar}>Recuperar</div>
      </div>
      <div className={styles.hu06RecuperarContraseaChild} />
    </div>
  );
};

export default HU06RecuperarContrasea1;
