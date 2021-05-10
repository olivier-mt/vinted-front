import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import React, { useMemo } from "react";

/**---STYLE DROP BOX---**/

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

/**-----**/

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

  /*---UseMemo--*/

  const style = useMemo(
    () => ({
      ...baseStyle,
    }),
    []
  );

  /*-------------*/

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
        {/* <input
          type="file"
          name="picture"
          id=""
          placeholder="picture"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        /> */}
        {/* DRAG n DROP*/}

        <div {...getRootProps({ style })}>
          <input {...getInputProps()} className="drag" />
          {picture ? (
            <p>{picture.name}</p>
          ) : isDragActive ? (
            <p>Glisse une photo ici...</p>
          ) : (
            <p>Glisse une photo ici, ou clique pour en selectioner une </p>
          )}
        </div>

        {/*---------------*/}
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Publish;
