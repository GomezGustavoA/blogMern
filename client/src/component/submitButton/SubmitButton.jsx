import styles from "./submitButton.module.css";
const SubmitButton = ({ text, onClick, width, height }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        className={styles.submitButton}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
