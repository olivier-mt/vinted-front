import Logo from "../images/logoVinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ token, setToken }) => {
  const handleDisconnection = () => {
    setToken(null);

    Cookies.remove("token");
  };

  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"></img>

      {token ? (
        <button onClick={handleDisconnection}>Se déconnecter</button>
      ) : (
        <>
          <Link to={"/signup"}>S'inscrire</Link>
          <Link to={"/login"}>Se connecter</Link>
        </>
      )}

      <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
