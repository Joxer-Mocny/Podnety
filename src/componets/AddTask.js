import { useState, useRef } from "react";
import "../App";

const AddTask = ({ onAdd }) => {
  const [text, setName] = useState("");
  const [text1, setAdress] = useState("");
  const [text2, setText] = useState("");
  const [img, setImage] = useState({ file: null, imagePreviewUrl: null });

  const getDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();

    return `${day}.${month}.${year}`;
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (file === undefined || file === null) {
      return;
    }

    reader.onloadend = () => {
      setImage({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  };

  const renderImage = (img) => {
    if (img.imagePreviewUrl !== null) {
      return <img src={img.imagePreviewUrl} style={{ width: "200px" }} />;
    }

    return <div className="previewText">Nahrajte obrazok</div>;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Prosím podajte podnet");
      return;
    }

    onAdd({ text, text1, text2, date: getDate(), img });

    setName("");
    setAdress("");
    setText("");
    setImage({ file: null, imagePreviewUrl: null });
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Meno a priezvisko</label>
        <input
          type="text"
          palceholder="Meno a priezvisko"
          value={text}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Adresa</label>
        <input
          type="text"
          palceholder="Adresa"
          value={text1}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Popis podnetu</label>
        <input
          type="text"
          palceholder="Popis podnetu"
          value={text2}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <h1>Upload Image</h1>
        <input
          type="file"
          placeholder="Upload an image"
          onChange={(e) => handleImageChange(e)}
        />
      </div>

      {renderImage(img)}

      <input type="submit" value="Uložiť podnet" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
