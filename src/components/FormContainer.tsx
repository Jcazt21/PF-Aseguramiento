import { FunctionComponent } from "react";
import User03C from "./User03C";
import styles from "./FormContainer.module.css";

type FormContainerType = {
  imageDescription?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  imageDescription,
}) => {
  return (
    <div className={styles.txtNombreusuarioParent}>
      <div className={styles.txtNombreusuario}>Nombre usuario</div>
      <div className={styles.txtIdusuario}>id_usuario</div>
      <User03C
        imageDimensions="/user-03c2.png"
        user03CIconWidth="200px"
        user03CIconHeight="200px"
        user03CIconPosition="absolute"
        user03CIconTop="0px"
        user03CIconLeft="0px"
        user03CIconBorderRadius="100px"
      />
    </div>
  );
};

export default FormContainer;
