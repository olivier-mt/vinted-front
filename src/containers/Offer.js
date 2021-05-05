import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    "Is Loading ..."
  ) : (
    <div>
      <Header />
      <div>{`Offer id : ${id}`}</div>
      <Link to={"/"}> To Home </Link>
      <div>{data.product_name}</div>
    </div>
  );
};

export default Offer;
