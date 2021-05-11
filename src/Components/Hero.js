import Banner from "../images/banner.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p>Prêts à faire du tri dans vos placards ?</p>

        <div>
          <Link to={"/publish"}>Commencer à vendre</Link>
        </div>
      </div>

      <img src={Banner} alt="" />
    </div>
  );
};

export default Hero;
