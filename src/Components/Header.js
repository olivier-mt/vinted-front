import Logo from "../images/logoVinted.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" />
      <span>Header</span> <button>S'inscrire</button>
      <button>Se connecter</button> <button>Vends tes articles</button>
    </div>
  );
};

export default Header;
