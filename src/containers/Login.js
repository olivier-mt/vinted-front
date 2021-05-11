import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setToken, from }) => {
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
        "https://vintedproject.herokuapp.com/user/login",
        userInfo
      );

      const token = response.data.token;

      Cookies.set("token", token, { expires: 7 });

      setToken(token);

      // history.push("/");

      {
        from === "publish" ? history.push("/publish") : history.push("/");
      }

      console.log("Logged In ===>", token);
    } catch (error) {
      console.log(error.response);
    }
    //  HANDLE TOKEN
  };

  return (
    /* <ReactModal
      isOpen={modal}
      style={customStyles}
      closeTimeoutMS={2000}
      parentSelector={() => document.querySelector(".header")}
    >*/
    <div className="login-page">
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
        <Link to={"/signup"}>Pas encore de compte ? Inscris-toi !</Link>
      </form>
    </div>
    /* </ReactModal>*/
  );
};

export default Login;
