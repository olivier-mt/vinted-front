import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../Components/Article";
import Banner from "/Users/oliviermountou/LeReacteur/React/projects/vinted-front/src/banner.jpg";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    "isLoding"
  ) : (
    <div>
      <Header />
      <Hero />
      <div>Home</div>
      <Link to={"/offer"}> To offers</Link>
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
