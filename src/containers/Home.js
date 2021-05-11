import Hero from "../Components/Hero";
import { useEffect, useState } from "react";
import axios from "axios";
import Article from "../Components/Article";

const Home = () => {
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

  return isLoading ? (
    "isLoding"
  ) : (
    <div className="home">
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
