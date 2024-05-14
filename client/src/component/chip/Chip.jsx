import React from "react";
import PropTypes from "prop-types";
import styles from "./chip.module.css";

const Chip = ({ label, onDelete }) => {
  return (
    <div className={styles.chip}>
      <span className={styles.label}>{label}</span>
      {onDelete && (
        <button className={styles.deleteButton} onClick={onDelete}>
          &times;
        </button>
      )}
    </div>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default Chip;
