import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../redux/actions/actionIndex";

export default function Deposits() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  let totalRevenew = 0;

  useEffect(() => {
    !orders.length && dispatch(getOrders());
  }, [orders, dispatch, totalRevenew]);

  const totalRevenewSet = (orders) => {
    for (let i = 0; i < orders.length; i++) {
      totalRevenew = totalRevenew + orders[i].totalAmount;
    }
    console.log(totalRevenew);
    return totalRevenew;
  };

  return (
    <React.Fragment>
      <Title>Total sales</Title>
      <Typography component="p" variant="h4">
        {orders.length}
      </Typography>
      

      <Title>Total revenew</Title>
      <Typography component="p" variant="h4">
      {`$${totalRevenewSet(orders)}`}
      </Typography>
    </React.Fragment>
  );
}
