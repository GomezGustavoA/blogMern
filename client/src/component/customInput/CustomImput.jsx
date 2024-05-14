import styles from "./customInput.module.css";

const CustomInput = ({
  label,
  type,
  name,
  onChange,
  onClick,
  accept,
  icon,
  onMouseEnter,
  onMouseOut,
  width,
  height,
  spaceIcon,
  spaceInput,
}) => {
  return (
    <div
      className={styles.container}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        gridTemplateColumns: `${spaceIcon}% ${spaceInput}%`,
      }}
    >
      <div className={styles.icons} onClick={onClick}>
        {icon}
      </div>

      <input
        type={type}
        name={name}
        onChange={onChange}
        accept={accept}
        placeholder={label}
      />
    </div>
  );
};

export default CustomInput;
