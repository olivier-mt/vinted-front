import { Redirect, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Components/CheckoutForm";

const Payment = ({ token, setFrom }) => {
  const { id } = useParams();
  const location = useLocation();
  const { price, title } = location.state;
  const [offertData, setOfferData] = useState();
  const [paymentInProcess, setPaymentInProcess] = useState(false);

  const newPrice = price + 0.4 + 0.8;
  const newPriceFixed = newPrice.toFixed(2);
  setFrom("payment");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vintedproject.herokuapp.com/offer/${id}`
      );

      setOfferData(response.data);
    };

    fetchData();
  }, []);

  const stripePromise = loadStripe(
    "pk_test_51IpvaKFsit00Ce9rWDAyJcPe6fSFv1adws8MwDSrO4rhsi12VjWn7YEN9dFWurcVrgILSweEi8RzXKdq1QNxwiN100MNgBgv9j"
  );

  return token ? (
    <div className="payment">
      <div>
        <p>Résumé de la commande</p>
        <p>
          <span>Commande </span> <span>{price}€</span>
        </p>
        <p>
          <span>Frais de protection acheteurs </span> <span>0.40€</span>
        </p>
        <p>
          <span>Frais de port</span> <span>0.80€</span>
        </p>
        <hr style={{ opacity: "20%" }} />
        <p>
          <span>Total</span> <span>{newPriceFixed}€</span>
        </p>

        <div>
          Il ne vous reste plus qu'une étape pour vous offrir
          <span> {title}</span> .Vous aller payer <span>{newPriceFixed}</span>€
          ( frais de portection et frais de port inclus)
        </div>
        <Elements stripe={stripePromise}>
          <hr style={{ opacity: "20%" }} />

          <CheckoutForm
            title={title}
            price={newPriceFixed}
            token={token}
            setPaymentInProcess={setPaymentInProcess}
          />
        </Elements>
      </div>
    </div>
  ) : (
    <Redirect to={"/login"} />
  );
};
export default Payment;
