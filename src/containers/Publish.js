import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

const Publish = ({ token }) => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [picture, setPicture] = useState();

  const onDrop = (acceptedFiles) => {
    // Do something with the files

    setPicture(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("condition", condition);
    formData.append("city", city);
    formData.append("brand", brand);
    formData.append("size", size);
    formData.append("color", color);
    formData.append("picture", picture);

    try {
      const response = await axios.post(
        "https://vintedproject.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      return alert("Annonce publié!");
    } catch (error) {
      console.log(error.message);
      return alert("l'annonce n'a pas été publié");
    }
  };

  return (
    <div className="publish">
      <p>Vendre un article</p>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="title"
          id=""
          placeholder="titre"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          id=""
          placeholder="description"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <input
          type="number"
          name="price"
          id=""
          placeholder="price"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="text"
          name="condition"
          id=""
          placeholder="condition"
          onChange={(event) => {
            setCondition(event.target.value);
          }}
        />
        <input
          type="text"
          name="city"
          id=""
          placeholder="ville"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <input
          type="text"
          name="brand"
          id=""
          placeholder="marque"
          onChange={(event) => {
            setBrand(event.target.value);
          }}
        />
        <input
          type="text"
          name="size"
          id=""
          placeholder="taille"
          onChange={(event) => {
            setSize(event.target.value);
          }}
        />
        <input
          type="text"
          name="color"
          id=""
          placeholder="couleur"
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="file"
          name="picture"
          id=""
          placeholder="picture"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />
        {/* DRAG n DROP*/}

        <div {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>

        {/*---------------*/}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Publish;
