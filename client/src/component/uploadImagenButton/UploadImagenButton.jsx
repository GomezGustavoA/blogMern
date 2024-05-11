import Avatar from "../avatarUser/AvatarUser";
import styles from "./uploadImagenButton.module.css";
import AddCirculeIcon from "../../../public/svg/addCircule.svg";

const UploadImageButton = ({ onChange, image }) => {
  return (
    <div className={styles.container}>
      <Avatar imageUrl={image} width={90} className={styles.avatar} />
      <label htmlFor="uploadImage">
        <input
          id="uploadImage"
          type="file"
          accept="image/*"
          onChange={onChange}
          style={{ display: "none" }}
        />
        <img src={AddCirculeIcon} alt="" />
      </label>
    </div>
  );
};

export default UploadImageButton;
