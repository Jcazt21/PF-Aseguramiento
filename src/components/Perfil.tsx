import { FunctionComponent } from "react";
import User03C from "./User03C";
import styles from "./Perfil.module.css";
const Perfil: FunctionComponent = () => {
  return (
    <div className={styles.perfil1}>
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
        <img className={styles.userCircleIcon1} alt="" src="/usercircle.png" />
        <h3 className={styles.verCalificaciones}>Perfil</h3>
      </button>
      <button className={styles.btnCalificaciones1}>
        <img className={styles.fileIcon1} alt="" src="/book-check.png" />
        <h3 className={styles.verCalificaciones}>VER CALIFICACIONES</h3>
      </button>
      <button className={styles.btnAsignaturas1}>
        <img className={styles.fileIcon1} alt="" src="/desk-alt.png" />
        <div className={styles.asignaturasWrapper}>
          <button className={styles.visualizarPensum1}>Asignaturas</button>
        </div>
      </button>
      <button className={styles.btnPanel2}>
        <img className={styles.fileIcon1} alt="" />
        <button className={styles.btnPanel3}>
          <div className={styles.panel}>Panel</div>
        </button>
      </button>
      <div className={styles.nombre}>Nombre</div>
      <div className={styles.apellido}>apellido</div>
      <div className={styles.carrera}>CARRERA</div>
      <div className={styles.idUsuario}>id_usuario</div>
      <div className={styles.estudiante}>Estudiante</div>
      <div className={styles.registradoDesdeDdmmaaa}>
        Registrado desde DD/MM/AAA
      </div>
      <User03C
        imageDimensions="/foto-perfil.png"
        user03CIconWidth="300px"
        user03CIconHeight="300px"
        user03CIconPosition="absolute"
        user03CIconTop="101px"
        user03CIconLeft="1009px"
        user03CIconBorderRadius="100px"
      />
    </div>
  );
};

export default Perfil;
