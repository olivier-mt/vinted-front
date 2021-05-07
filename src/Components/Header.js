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
      <Link to={"/"}>
        <img src={Logo} alt="" className="logo"></img>
      </Link>

      {token ? (
        <button onClick={handleDisconnection} className="red-btn">
          Se déconnecter
        </button>
      ) : (
        <>
          <Link to={"/signup"} className="white-btn">
            S'inscrire
          </Link>
          <Link to={"/login"} className="white-btn">
            Se connecter
          </Link>
        </>
      )}

      <button className="green-btn">Vends tes articles</button>
    </div>
  );
};

export default Header;
