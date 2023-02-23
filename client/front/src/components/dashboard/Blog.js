import * as React from "react";
import Title from "./Title";
import Button from "@mui/material/Button";
import BlogForm from "./BlogForm";
import Modal from "@mui/material/Modal";
import { Divider } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlogs, postBlog } from "../../redux/actions/actionIndex";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export default function Blog() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const [blog, setBlog] = React.useState({ name: "", text: "", img: "" });
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const columns = [
    {
      field: "id",
      headerName: "id",
    },
    {
      field: "name",
      headerName: "name",
    },
    {
      field: "text",
      headerName: "text",
      width: 350,
    },
    {
      field: "img",
      headerName: "img",
      width: 500,
    },
  ];
  const rows = blogs;

  useEffect(() => {
    dispatch(getBlogs());
  }, []);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Title>Blogs</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Divider />

      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "90px",
        }}
      >
        <BlogForm />
      </Modal>
      <Button onClick={() => setOpen(true)}>Create Blog</Button>
    </div>
  );
}
