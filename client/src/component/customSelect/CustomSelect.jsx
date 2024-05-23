import ArrowDropDown from "../iconsSVG/ArrowDropDown";
import ArrowUp from "../iconsSVG/arrowUp";
import Name from "../iconsSVG/name";
import styles from "./customSelect.module.css";
const CustomSelection = ({ nameValue, toogle = false, name, svg }) => {
  return (
    <div className={styles.container}>
      {name ? (
        <div className={styles.icons}>{svg || <Name />}</div>
      ) : (
        <div className={styles.icons}>
          {!toogle ? <ArrowUp /> : <ArrowDropDown />}
        </div>
      )}
      <div className={styles.category}>
        {name ? (
          <span>{nameValue || "Autor de la Publicidad"}</span>
        ) : (
          <span>{nameValue || "Categoría"}</span>
        )}
      </div>
    </div>
  );
};
export default CustomSelection;
