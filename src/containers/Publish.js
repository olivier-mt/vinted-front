import { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [condition, setCondition] = useState();
  const [city, setCity] = useState();
  const [brand, setBrand] = useState();
  const [size, setSize] = useState();
  const [color, setColor] = useState();
  const [picture, setPicture] = useState();

  const handleOnSubmit = async () => {
    try {
      const response = axios.post("");
    } catch (error) {}
  };

  return (
    <>
      <div>
        <p>Vendre un article</p>
        <form action="">
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
        </form>
      </div>
    </>
  );
};

export default Publish;
