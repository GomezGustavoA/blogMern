import Avatar from "../avatarUser/AvatarUser";
import styles from "./uploadImagenButton.module.css";
import AddCirculeIcon from "../../../public/svg/addCircule.svg";
import InputPhoto from "../inputPhoto/InputPhoto";

const UploadImageButton = ({
  avatar = true,
  onChange,
  image,
  width,
  heigth,
}) => {
  return (
    <div
      className={styles.container}
      style={{ width: `${width}px`, height: `${heigth}px` }}
    >
      {avatar ? (
        <Avatar imageUrl={image} width={90} className={styles.avatar} />
      ) : (
        <InputPhoto
          image={image}
          className={styles.inputPhoto}
          style={{ width: `${width}px`, height: `${heigth}px` }}
        />
      )}

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
