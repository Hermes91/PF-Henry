import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import validate from "./validate";
import {
  getCategories,
  createProduct,
} from "../../redux/actions/actionIndex.js";
import { toast } from "react-toastify";
import Title from "../dashboard/Title";
import {
  Box,
  TextField,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";

export default function ProductForm() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.allCategories);
  const navigate = useNavigate();
  const [err, setErr] = useState({});

  const [categorySelected, setCategorySelected] = React.useState("");

  const [input, setInput] = useState({
    name: "",
    description: "",
    height: "",
    weight: "",
    price: "",
    img: "",
    offert: "",
    stock: "",
    categories: [],
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  function handleChange(e) {
    setInput((prevState) => {
      const newState = {
        ...prevState,
        [e.target.name]: e.target.value,
      };
      setErr(validate(newState));
      return newState;
    });
  }

  const handleChangeCategory = (event) => {
    setCategorySelected(event.target.value);
    console.log(event.target.value);
  };

  const isButtonDisabled = () => Object.keys(err).length > 0;
  const dis = isButtonDisabled();

  const handleSelectCategory = (e) => {
    const selCategory = e.target.value;
    setInput((prevInput) => ({
      ...prevInput,
      categories: [...prevInput.categories, selCategory],
    }));
  };

  const handleDeleteCategory = (cat) => {
    setInput({
      ...input,
      categories: input.categories.filter((c) => c !== cat),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(err).length)
      toast.warn("Please complete the form with the correct data");
    const newProduct = {
      name: input.name,
      description: input.description,
      height: Number(input.height),
      weight: Number(input.weight),
      price: Number(input.price),
      offert: Number(input.offert),
      stock: Number(input.stock),
      img: input.img,
      category: [...input.categories],
    };
    dispatch(createProduct(newProduct));
    setInput({
      name: "",
      description: "",
      height: "",
      weight: "",
      price: "",
      img: "",
      offert: "",
      stock: "",
      categories: [],
    });
    navigate("/admin");
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "100%" },
      }}
      noValidate
      autoComplete="off"
    >
      <Title>Create a new product</Title>
      <Divider />

      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "93ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Name:"
            defaultValue="1"
            value={input.name}
            size="small"
            name="name"
            type="text"
            onChange={handleChange}
            helperText={err.name && <p>{err.name}</p>}
          />
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Height:"
            defaultValue="1"
            value={input.height}
            size="small"
            name="height"
            type="number"
            onChange={handleChange}
            helperText={err.height && <p>{err.height}</p>}
          />

          <TextField
            required
            id="outlined-required"
            label="Weight:"
            defaultValue="1"
            value={input.weight}
            size="small"
            name="weight"
            type="number"
            onChange={handleChange}
            helperText={err.weight && <p>{err.weight}</p>}
          />

          <TextField
            required
            fullWidth
            id="outlined-required"
            label="Image URL:"
            defaultValue="/img.jpg"
            value={input.img}
            size="small"
            name="img"
            type="text"
            onChange={handleChange}
            helperText={err.img && <p>{err.img}</p>}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "93ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            multiline
            fullWidth
            rows={3}
            id="outlined-required"
            label="Description:"
            defaultValue="description"
            value={input.description}
            size="small"
            name="description"
            type="text"
            onChange={handleChange}
            helperText={err.description && <p>{err.description}</p>}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            required
            id="outlined-required"
            label="Price:"
            defaultValue="1"
            value={input.price}
            size="small"
            name="price"
            type="number"
            onChange={handleChange}
            helperText={err.price && <p>{err.price}</p>}
          />

          <TextField
            required
            id="outlined-required"
            label="Stock:"
            defaultValue="1"
            value={input.stock}
            size="small"
            name="stock"
            type="number"
            onChange={handleChange}
            helperText={err.stock && <p>{err.stock}</p>}
          />

          <TextField
            required
            id="outlined-required"
            label="Discount:"
            defaultValue="1"
            value={input.offert}
            size="small"
            name="offert"
            type="number"
            onChange={handleChange}
            helperText={err.offert && <p>{err.offert}</p>}
          />
        </Box>

        <FormControl sx={{ m: 1, minWidth: 265 }}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            fullWidth
            defaultValue="Cactus"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={categorySelected}
            label="Category"
            onChange={handleChangeCategory}
          >
            {categories?.map(
              (c) => c.length > 0 && <MenuItem value={c}>{c}</MenuItem>
            )}
          </Select>
        </FormControl>

        <Button
          sx={{ "& button": { m: 1 } }}
          variant="contained"
          size="large"
          disabled={() => isButtonDisabled()}
          type="submit"
        >
          Submit product
        </Button>
      </form>
    </Box>
  );
}
