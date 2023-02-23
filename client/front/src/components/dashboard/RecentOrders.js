import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import OrderCard from "./OrderCard";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getOrders } from "../../redux/actions/actionIndex";

export default function RecentOrders() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const users = useSelector((state) => state.allUsers);
  const [order, setOrder] = React.useState({});
  const [user, setUser] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    !orders.length && dispatch(getOrders());
    !users.length && dispatch(getAllUsers());
  }, [orders, dispatch, users]);

  return (
    <React.Fragment>
      <Title>Orders</Title>

      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.slice(0, 3).map((order) => (
            <TableRow key={order.id}>
              <TableCell>
                <Button
                  onClick={() => {
                    setUser(order.userId);
                    handleOpen();
                  }}
                >
                  {order.id}
                </Button>
              </TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell align="right">{`$${order.totalAmount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <OrderCard
            id={order.id}
            date={order.date}
            name={order.name}
            status={order.status}
            products={[{ name: "Eulalias" }, { name: "Begonias" }]}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
