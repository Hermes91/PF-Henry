import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import OrderCard from "./OrderCard";
import TablePagination from "@mui/material/TablePagination";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getOrders } from "../../redux/actions/actionIndex";
import { useState } from "react";

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
  const [order, setOrder] = useState({});
  const [user, setUser] = useState({});
  const [pg, setpg] = useState(0);
  const [rpg, setrpg] = useState(5);
    function handleChangePage(event, newpage) {
    setpg(newpage);
    }
    function handleChangeRowsPerPage(event) {
    setrpg(parseInt(event.target.value, 10));
    setpg(0);
    }

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
          {orders.slice(pg * rpg, pg * rpg + rpg).map((order) => (
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
      <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={users.length}
      rowsPerPage={rpg}
      page={pg}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      />
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
