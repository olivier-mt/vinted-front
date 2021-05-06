import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = ({ setToken }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let history = useHistory();

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

      // GET TOKEN

      const newToken = response.data.token;

      //PUT TOKEN IN STATE

      setToken(newToken);

      // SET NEW COOKIE (does not work)

      Cookies.set("token", newToken, { expires: 10 });

      // REDIRECT TO HOMEPAGE

      history.push("/");
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
