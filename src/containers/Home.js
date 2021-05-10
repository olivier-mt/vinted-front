import Hero from "../Components/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../Components/Article";
import Cookies from "js-cookie";
import ReactModal from "react-modal";
import Login from "./Login";

const Home = ({ token, modal }) => {
  let test = Cookies.get("token");
  console.log(test);

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://vintedproject.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  //MODAL STYLE
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return isLoading ? (
    "isLoding"
  ) : (
    <div className="home">
      <ReactModal isOpen={modal} style={customStyles}>
        <Login />
      </ReactModal>
      <Hero />
      {/*RETURN EACH ARTICLE FROM DATA*/}
      <div className="home-articles">
        {data.offers.map((elem, index) => {
          return <Article elem={elem} />;
        })}
      </div>
    </div>
  );
};

export default Home;
