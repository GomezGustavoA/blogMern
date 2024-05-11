import styles from "./submitButton.module.css";
const SubmitButton = ({ text, onClick, width, height }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={styles.submitButton}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
