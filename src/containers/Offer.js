import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Picture from ""

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
    <div className="offer">
      <Header />
      <Link to={"/"}>To Home </Link>

      <div className="offer-container">
        <img src={data.product_pictures[0].secure_url} alt="" />

        <div>
          <div>
            <div>{data.product_price}€</div>
            <div>{`MARQUE: ${data.product_details[0].MARQUE}`}</div>
            <div>{`ÉTAT: ${data.product_details[1].ÉTAT}`}</div>
            <div>{`COULEUR: ${data.product_details[2].COULEUR}`}</div>
            <div>{`EMPLACEMENT: ${data.product_details[3].EMPLACEMENT}`}</div>
          </div>

          {<hr />}

          <div>{data.product_name}</div>
          <div>{data.product_description}</div>
          <div className="offer-owner">
            <img src={data.owner.account.avatar.secure_url} alt="" />{" "}
            {`${data.owner.account.username}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
