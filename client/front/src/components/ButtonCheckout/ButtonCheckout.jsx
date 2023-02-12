import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";
import  {useAuth0} from '@auth0/auth0-react'

const ButtonCheckout = (props) => {
  const {isAuthenticated, user} = useAuth0()
  const productsend = props.product;
  //console.log("Productsend", productsend);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderID) => {
    //We need to create and call here the action and reducer for setOrder in the DB :o

    setPaidFor(true); //If the payment was successfull
  };

  if (paidFor) {
    alert("Your payment was accepted"); //Evaluate redirect page...
  }

  if (error) {
    alert("You have to be logged in to buy"); //Evaluate redirect page...
  }

  return (
    <PayPalButtons
      //   style={{
      //     color: "green",
      //     layout: "horizontal",
      //     height: 48,
      //     tagline: false,
      //     shape: "pill",
      //   }}
      onClick={(data, actions) => {
        //We can validate some here
      //  const nosequevalidar = true;

        if (!user.email) {
          setError("Authentication error");
          return actions.reject;
        } else {
          return actions.resolve;
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: productsend.description,
              amount: {
                value: productsend.price,
              },
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order: ", order);
        handleApprove(data.orderID);
      }}
      onError={(error) => {
        setError(error);
        console.log("Paypal Checkout Error: ", error);
      }}
      onCancel={() => {
        console.log("Paypal Checkout was cancelled"); //Evaluate redirect user to car again
      }}
    />
  );
};

export default ButtonCheckout;
