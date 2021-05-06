import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    // GET INFO FROM USER
    const userInfo = {
      email: email,
      password: password,
    };
    // SEND INFO TO API

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        userInfo
      );

      const token = response.data.token;

      Cookies.set("token", token, { expires: 7 });

      setToken(token);

      history.push("/");

      console.log("Logged In ===>", token);
    } catch (error) {
      console.log(error.response);
    }
    //  HANDLE TOKEN
  };

  return (
    <div>
      <p>Se connecter</p>
      <form action="" onSubmit={handleOnSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Adresse email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <input type="submit" value="Se connecter" />
      </form>
    </div>
  );
};

export default Login;
