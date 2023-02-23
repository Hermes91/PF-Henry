import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postBlog } from "../../redux/actions/actionIndex";
import Title from "./Title";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";

export default function BlogForm(props) {
  const [name, setName] = React.useState();
  const [text, setText] = React.useState();
  const [img, setImg] = React.useState();
  const dispatch = useDispatch();
  const createBlog = async () => {
    let blog = {
      name,
      text,
      img,
    };
    await dispatch(postBlog(blog));
  };
  const successMessage = async () => {
    if (!createBlog) {
      toast.success("Your blog has been created!");
      return;
    }
  };

  return (
    <Box
      component="form"
      sx={{
        backgroundColor: "white",
        justifyContent: "center",
        width: 700,
        display: "flex",
        alignContent: "center",
      }}
    >
      <Grid container>
        <Grid item xs={6}>
          <Title>Name</Title>

          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            placeholder="Write here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Title>Image</Title>
          <TextField
            id="filled-basic"
            label="Image"
            variant="filled"
            placeholder="Put your URL here..."
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </Grid>
        <Grid item md={12}>
          <Title>Text</Title>
          <TextField
            id="standard-basic"
            label="Text"
            variant="standard"
            placeholder="Write here..."
            multiline
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Button onClick={createBlog}>Publish</Button>
        {successMessage}
      </Grid>
    </Box>
  );
}
