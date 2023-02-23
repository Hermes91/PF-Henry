import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import OrderCard from "./OrderCard";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers, getOrders } from "../../redux/actions/actionIndex";

export default function Clients() {
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
  const users = useSelector((state) => state.allUsers);
  const tableRef = useRef(null);
  const [user, setUser] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOnClik = (user) => {
    setUser(user);
    dispatch(getAllUsers());
  };

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  useEffect(() => {
    !users.length && dispatch(getAllUsers());
  }, [users, dispatch]);

  return (
    <React.Fragment>
      <Title>Clients</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Address Line 1</TableCell>
            <TableCell>Address Line 2</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Image</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.addressLineOne}</TableCell>
              <TableCell>{user.addressLineTwo}</TableCell>
              <TableCell>{user.telephone}</TableCell>
              <TableCell>
                <img src={user.picture} width="20px" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
