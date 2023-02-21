import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validate from './validate'
import { getCategories, createProduct, createCategory } from '../../redux/actions/actionIndex.js'
import { toast } from 'react-toastify'
import s from './ProductForm.module.css'

export default function ProductForm () {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.allCategories)
    const navigate = useNavigate()
    const [err, setErr] = useState({})
    const [newCategory, setNewCategory] = useState('');
    const [input, setInput] = useState({
      name: "",
      description: "",
      height: 0,
      weight: 0,
      price: 0,
      img: "",
      offert: 0,
      stock: 0,
      categories: []
    })

    useEffect(() => {
      dispatch(getCategories())
    }, [dispatch])

    function handleChange(e) {
        setInput(prevState => {
          const newState = {    
            ...prevState,
            [e.target.name]: e.target.value,
          };
          setErr(validate(newState))    
          return newState                 
        })
      }
  
    const isButtonDisabled = () => (Object.keys(err).length > 0)
  
    const handleSelectCategory = (e) => {
      setInput({
        ...input,
        categories: [...input.categories, e.target.value]
      })
    }
  
    const handleDeleteCategory = (e) => {
      setInput({
        ...input,
        categories: input.categories.filter((c) => c !== e)
      })
    }

    const handleChangeFile = (e) => {
      const file = e.target.files[0];
      setInput(prevInput => ({
        ...prevInput,
        img: file
      }));
    };

    function handleNewCategoryChange(e) {
      setNewCategory(e.target.value);
    }
  
    function handleCreateCategory(e) {
      e.preventDefault();
      if (!newCategory) {
        toast.warn('Please enter a category');
        return;
      }
  
      dispatch(createCategory(newCategory));
      setInput({
        ...input,
        categories: [...input.categories, newCategory]
      });
      setNewCategory('');
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (Object.keys(err).length) toast.warn('Please complete the form with the correct data')
      const newProduct = {
        name: input.name,
        description: input.description,
        height: Number(input.height),
        weight: Number(input.weight),
        price: Number(input.price),
        offert: Number(input.offert),
        stock: Number(input.stock),
        img: input.img,
        category: [...input.categories]
      }
      dispatch(createProduct(newProduct))
      setInput({
        name: "",
        description: "",
        height: 0,
        weight: 0,
        price: 0,
        img: "",
        offert: 0,
        stock: 0,
        categories: []
      })
      navigate('/admin')
    }

  
    return (
        <div className={s.prodForm}>
          <h1>Create a new product</h1>
          <h5>Complete all fields</h5>
  
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <label>Name:</label>
            <input value={input.name}
            name='name'
            onChange={handleChange}
            type='text'
            placeholder='Name' />
            {err.name && <p>{err.name}</p>}
            
            <label>Height:</label>
            <input value={input.height}
            name='height' 
            onChange={handleChange} 
            type='number' 
            placeholder='Height in cm' />
            {err.height && <p>{err.height}</p>}

            <label>Weight:</label>
            <input value={input.weight} 
            name='weight' 
            onChange={handleChange} 
            type='number' 
            placeholder='Weight in liters' />
            {err.weight && <p>{err.weight}</p>}

            <label>Image:</label>
            <input
            name='img'
            type='file'
            onChange={handleChangeFile}
            />
            {err.img && <p>{err.img}</p>}

            <label>Description:</label>
            <textarea value={input.description} 
            name='description' 
            onChange={handleChange} 
            placeholder='Description'>
            </textarea>
            {err.description && <p>{err.description}</p>}

            <label>Price:</label>
            <input value={input.price} 
            name='price' 
            onChange={handleChange} 
            type='number' 
            placeholder='Price' />
            {err.price && <p>{err.price}</p>}

            <label>Stock:</label>
            <input value={input.stock} 
            name='stock' 
            onChange={handleChange} 
            type='number' 
            placeholder='Stock units' />
            {err.stock && <p>{err.stock}</p>}

            <label>Discount:</label>
            <input value={input.offert} 
            name='offert' 
            onChange={handleChange} 
            type='number' 
            placeholder='Discount in %' />
            {err.offert && <p>{err.offert}</p>}
  
            <label>Category:</label>
            <select onChange={handleSelectCategory}>
              <option disabled selected>Select category</option>
              {categories?.map((c) => (
                c.length > 0 &&
              <option value={c}>{c}</option>
              ))}
            </select>
            <ul >
              {input.categories?.map((category,id) => 
                <li key={id}>
                  {category}
                  <button 
                  type='button'
                  value={category} 
                  onClick={handleDeleteCategory}
                  >X</button>
                </li>
              )}
            </ul>

            <label>New Category:</label>
            <input value={newCategory}
            name='newCategory'
            onChange={handleNewCategoryChange}
            type='text'
            placeholder='New category' />
            <button type='button' onClick={handleCreateCategory}>Create category</button>
            <br />

            <button disabled={isButtonDisabled()} type='submit'>Submit product</button>
          </form>
        </div>
    );
  }