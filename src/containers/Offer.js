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
        `https://vintedproject.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      console.log("id here =>", id);
      setIsLoading(false);
    };

    fetchData();
    console.log("data==>", data);
  }, [id]);

  return isLoading ? (
    "Is Loading ..."
  ) : (
    <div className="offer">
      <div className="offer-container">
        <img src={data.product_image.secure_url} alt="" />

        <div>
          <div>
            <div>{data.product_price}€</div>
            {data.product_details[0].MARQUE && (
              <p>
                <span>MARQUE </span>
                <span>{data.product_details[0].MARQUE}</span>
              </p>
            )}
            {data.product_details[2].ÉTAT && (
              <p>
                <span>ÉTAT </span> <span>{data.product_details[2].ÉTAT}</span>
              </p>
            )}
            {data.product_details[3].COULEUR && (
              <p>
                <span>COULEUR </span>{" "}
                <span>{data.product_details[3].COULEUR}</span>
              </p>
            )}
            {data.product_details[4].EMPLACEMENT && (
              <p>
                <span>EMPLACEMENT </span>{" "}
                <span>{data.product_details[4].EMPLACEMENT}</span>
              </p>
            )}
          </div>

          {<hr />}

          <div>{data.product_name}</div>
          <div>{data.product_description}</div>
          <div className="offer-owner">
            <img src={data.owner.account.avatar.secure_url} alt="" />
            {`${data.owner.account.username}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
