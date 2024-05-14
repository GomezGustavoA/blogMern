import React, { useState } from "react";
import CustomInput from "../../component/customInput/CustomImput";
import styles from "./createPost.module.css";
import FroalaEditor from "../../component/froalaEditor/FroalaEditor";
import DropdownMenu from "../../component/dropdownMenu/DropdownMenu";
import CustomSelection from "../../component/customSelect/CustomSelect";
import Title from "../../component/iconsSVG/Title";
import UploadImageButton from "../../component/uploadImagenButton/UploadImagenButton";
import SubmitButton from "../../component/submitButton/SubmitButton";
import { useSelector, useDispatch } from "react-redux";
import { urls } from "../../utils/constant/urls";
import axios from "axios";
import { createPost } from "../../redux/publicationSlice";

const CreatePost = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    theme: "",
  });

  console.log(formData);
  const items = [
    { name: "MERN", funct: () => handleCategory("MERN") },
    { name: "MongoDB", funct: () => handleCategory("MongoDB") },
    { name: "Express", funct: () => handleCategory("Express") },
    { name: "React", funct: () => handleCategory("React") },
    { name: "Node", funct: () => handleCategory("Node") },
  ];
  const handleCategory = (name) => {
    setFormData({ ...formData, theme: name });
  };
  const ChangeUploadImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setImage(event.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (image) {
        const dataImage = new FormData();
        dataImage.append("file", image);
        dataImage.append("upload_preset", "Presets_blogMern");
        const { data } = await axios.post(urls.API_URL_CLOUDINARY, dataImage);
        console.log(data.secure_url);
        setFormData({ ...formData, image: data.secure_url });
      }
      // if (validationForm.validationSignup(formData)) {
      dispatch(createPost(formData));
      // }
      console.log("Publicación creada:", formData);
    } catch (error) {
      console.error("Error al crear la publicación:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleContentChange = (newContent) => {
    setFormData({ ...formData, content: newContent });
  };
  console.log(formData);
  return (
    <div className={styles.container}>
      <h2>Crea tu Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formImput}>
          <CustomInput
            icon={<Title />}
            label="Titulo"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            width={320}
            required
          />

          <div className={styles.Option}>
            <DropdownMenu
              avatar={
                <CustomSelection nameValue={formData?.theme} name={false} />
              }
              items={items}
              className={styles.select}
              left={50}
            />
          </div>
        </div>
        <div className={styles.imageUpload}>
          <UploadImageButton
            avatar={false}
            onChange={ChangeUploadImage}
            image={image}
            width={598}
            heigth={200}
          />
        </div>
        <div className={styles.editor}>
          <FroalaEditor handleContentChange={handleContentChange} />
        </div>
        <div className={styles.nameAndButton}>
          <CustomSelection nameValue={user?.userName} name={true} />
          <SubmitButton text={"Enviar"} width={200} height={40} />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
