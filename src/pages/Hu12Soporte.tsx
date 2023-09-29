import { FunctionComponent } from "react";
import User1 from "../components/User1";
import HomeFill from "../components/HomeFill";
import styles from "./Hu12Soporte.module.css";
const Hu12Soporte: FunctionComponent = () => {
  return (
    <div className={styles.hu12Soporte1}>
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
      <b className={styles.soporte}>Soporte</b>
      <b className={styles.preguntasFrecuentesOlvidastContainer}>
        <p className={styles.preguntasFrecuentes}>Preguntas Frecuentes</p>
        <p className={styles.preguntasFrecuentes}>&nbsp;</p>
        <ul className={styles.olvidasteTuContrasea}>
          <li className={styles.olvidasteTuContrasea1}>
            <span>¿Olvidaste tu contraseña?</span>
          </li>
        </ul>
        <p className={styles.preguntasFrecuentes}>
          <span>Si olvidaste tu contraseña, haz clic en "</span>
          <span className={styles.recuperarContrasea}>
            Recuperar Contraseña
          </span>
          <span className={styles.enLaPgina}>
            " en la página de inicio de sesión y sigue los pasos para
            recuperarla.
          </span>
        </p>
        <p className={styles.preguntasFrecuentes}>
          <span className={styles.blankLine2}>&nbsp;</span>
        </p>
        <p className={styles.preguntasFrecuentes}>
          <span className={styles.blankLine2}>Contáctanos</span>
        </p>
        <p className={styles.preguntasFrecuentes}>
          <span className={styles.enLaPgina}>
            Si no encuentras la respuesta a tu pregunta en nuestras FAQ o
            tutoriales, ¡no dudes en contactarnos!
          </span>
        </p>
        <ul className={styles.olvidasteTuContrasea}>
          <li className={styles.olvidasteTuContrasea1}>
            <span className={styles.enLaPgina}>
              Email: correo@institucional.institucion.com
            </span>
          </li>
          <li>
            <span className={styles.enLaPgina}>
              Teléfono: +1 (123) 456-7890
            </span>
          </li>
        </ul>
      </b>
    </div>
  );
};

export default Hu12Soporte;
