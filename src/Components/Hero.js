import Banner from "../images/banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <p>Prêts à faire du tri dans vos placards ?</p>
        <div>Commencer à vendre</div>
      </div>

      <img src={Banner} alt="" />
    </div>
  );
};

export default Hero;
