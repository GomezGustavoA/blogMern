import React from "react";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins/colors.min.js";
import "froala-editor/js/plugins/link.min.js";
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

const FroalaEditor = ({ handleContentChange }) => {
  const handleModelChange = (newModel) => {
    handleContentChange(newModel);
  };

  return (
    <FroalaEditorComponent
      tag="textarea"
      onModelChange={handleModelChange}
      config={{
        colorsBackground: ["#61BD6D", "#1ABC9C", "#54ACD2", "REMOVE"],
        height: 400,
        pastePlain: true,
        linkInsertButtons: ["linkBack"],
      }}
    />
  );
};

export default FroalaEditor;
