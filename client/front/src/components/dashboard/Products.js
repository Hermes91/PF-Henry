import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import ProductCard from "./ProductCard";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";
import { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionIndex";

export default function Products() {
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
  const products = useSelector((state) => state.allProducts);
  const tableRef = useRef(null);
  const [product, setProduct] = React.useState({});

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Products table",
    sheet: "Products",
  });

  useEffect(() => {
    !products.length && dispatch(getProducts());
  }, [products, dispatch]);

  return (
    <React.Fragment>
      <Title>Products</Title>
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
            <TableCell>Name</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Button
                  onClick={() => {
                    setProduct(product);
                    handleOpen();
                  }}
                >
                  {product.id}
                </Button>
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell align="right">{`$${product.price}`}</TableCell>
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
          <ProductCard
            id={product.id}
            name={product.name}
            stock={product.stock}
            price={product.price}
            description={product.description}
            image={product.image}
            onClose={handleClose}
          />
        </Box>
      </Modal>
    </React.Fragment>
  );
}
