import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // SEND USER INFO TO API

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: `${email}`,
          username: `${username}`,
          password: `${password}`,
        }
      );

      // A EFFACER
      console.log("submited");
      console.log(response);

      //PUT TOKEN ON COOKIE

      // REDIRECT TO HOMEPAGE
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p>S'inscrire</p>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name=""
          id=""
          placeholder="Nom d'utilisateur"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Mot de passe"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    </div>
  );
};

export default Signup;
