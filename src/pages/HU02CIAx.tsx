import { FunctionComponent } from "react";
import User1 from "../components/User1";
import HomeFill from "../components/HomeFill";
import FormContainer from "../components/FormContainer";
import styles from "./HU02CIAx.module.css";
const HU02CIAx: FunctionComponent = () => {
  return (
    <div className={styles.hu02Ciax}>
      <img
        className={styles.sidePanelLeftIcon}
        alt=""
        src="/side-panel-left.png"
      />
      <button className={styles.logo1}>
        <img
          className={styles.logoUnitechIcon}
          alt=""
          src="/whatsapp-image-20230908-at-2252-1@2x.png"
        />
        <h1 className={styles.txtUnitech}>UniTech</h1>
      </button>
      <button className={styles.btnLogout1}>
        <button className={styles.boxLogout}>
          <div className={styles.txtLogout}>CERRAR sesion</div>
        </button>
      </button>
      <img
        className={styles.sidePanelRightIcon}
        alt=""
        src="/side-panel-right.png"
      />
      <div className={styles.panelFrase1} />
      <div className={styles.txtFrase}>
        “La educación es el arma más poderosa que puedes usar para cambiar el
        mundo.”
      </div>
      <h1 className={styles.txtMnsjestudiante}>Buen dia estudiante!</h1>
      <h1 className={styles.txtPanelestudiantil}>Panel Estudiantil</h1>
      <button className={styles.btnVisualizarpensum}>
        <img className={styles.fileIcon1} alt="" src="/file.png" />
        <button className={styles.visualizarPensum1}>Visualizar pensum</button>
      </button>
      <button className={styles.btnPerfil1}>
        <h3 className={styles.perfil2}>Perfil</h3>
        <User1 />
        <h3 className={styles.perfil2}>Perfil</h3>
      </button>
      <button className={styles.btnCalificaciones1}>
        <img className={styles.fileIcon1} alt="" src="/book-check.png" />
        <h3 className={styles.verCalificaciones}>VER CALIFICACIONES</h3>
      </button>
      <button className={styles.btnPanel1}>
        <HomeFill />
        <div className={styles.panel}>Panel</div>
      </button>
      <button className={styles.btnAsignaturas1}>
        <img className={styles.fileIcon1} alt="" src="/desk-alt.png" />
        <div className={styles.asignaturasWrapper}>
          <button className={styles.visualizarPensum1}>Asignaturas</button>
        </div>
      </button>
      <FormContainer imageDescription="/user-03c.png" />
    </div>
  );
};

export default HU02CIAx;
