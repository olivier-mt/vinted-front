import Logo from "../images/logoVinted.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo"></img>{" "}
      <Link to={"/signup"}>S'inscrire</Link>
      <button>Se connecter</button> <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
