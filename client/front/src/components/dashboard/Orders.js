import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import BasicCard from "./BasicCard";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../redux/actions/actionIndex";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

export default function Orders() {
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
  const tableRef = useRef(null);
  const [order, setOrder] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Orders table",
    sheet: "Orders",
  });

  useEffect(() => {
    !orders.length && dispatch(getOrders());
  }, [orders, dispatch]);

  return (
    <React.Fragment>
      <Title>Orders</Title>
      <Button
        variant="contained"
        onClick={onDownload}
        startIcon={<DownloadIcon />}
        sx={{
          width: 150,
          display: "flex",
          alignSelf: "flex-end",
          marginTop: 1,
          marginBottom: 2,
        }}
      >
        Descargar
      </Button>
      <Table size="small" ref={tableRef}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.name}</TableCell>
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
          <BasicCard
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
