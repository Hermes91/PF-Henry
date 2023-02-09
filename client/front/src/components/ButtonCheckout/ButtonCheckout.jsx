import { PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

const ButtonCheckout = (props) => {
  const props = { props };

  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    //We need to create and call here the action and reducer for setOrder in the DB :o

    setPaidFor(true); //If the payment was successfull
  };

  if (paidFor) {
    alert("your money belongs to me jajajajajaja..."); //Evaluate redirect page...
  }

  if (error) {
    alert("Don't play with me, you don't have money!"); //Evaluate redirect page...
  }

  return (
    <PayPalButtons
      style={{
        color: "green",
        layout: "horizontal",
        height: 48,
        tagline: false,
        shape: "pill",
      }}
      onClick={(data, actions) => {
        //We can validate some here
        const nosequevalidar = false;
        if (nosequevalidar) {
          setError("Some validation error");
          return actions.reject;
        } else {
          return actions.resolve;
        }
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              description: product.description,
              amount: product.amount,
            },
          ],
        });
      }}
      onApprove={async (data, actions) => {
        const order = await actions.order.capture();
        console.log("order: ", order);
        handleApprove(data.orderId);
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
