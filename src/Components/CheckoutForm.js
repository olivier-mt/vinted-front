import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, price }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      // get  data from the form

      const cardElements = elements.getElement(CardElement);

      // send to Strip API
      const stripeResponse = await stripe.createToken(cardElements, {
        name: "buyer id",
      });
      //console.log(stripeResponse);

      // Get Token
      const stripeToken = stripeResponse.token.id;

      // Send token & info to Backend

      const response = await axios.post(
        "https://vintedproject.herokuapp.com/offer/pay",
        {
          stripeToken: stripeToken,
          amount: price,
          title: title,
        }
      );

      if (response.status === 200) {
        alert("Paiement effectué");
      } else {
        alert("Paiement effectué");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="card-elem">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <input type="submit" className="buy-btn" value={"Pay"} />
      </form>
    </div>
  );
};

export default CheckoutForm;
