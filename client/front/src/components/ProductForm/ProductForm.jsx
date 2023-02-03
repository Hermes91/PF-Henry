import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// modificar nombre de las actions 
// import {getCategories, postProduct} from "../../redux/actions"
// import function validate

export default function ProductForm () {

    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const [selectedCategory, setSelectedCat] = useState([])
    const [err, setErr] = useState({})
    const [input, setInput] = useState({
      name: "",
      description: "",
      height: "",
      weight: "",
      price: "",
      image: "",
      offert: "",
      stock: "",
      categories: []
    })
    
    const handleChange = (e) => {
      setInput({...input, [e.target.name]: e.target.value})
      // chequear el import de la función validate
      setErr(validate({...input, [e.target.name]: e.target.value}))
    }
  
    const isButtonDisabled = () => (!!Object.keys(err).length)
  
    const handleSelectDiet = (e) => {
      if (!selectedCategory.includes(e.target.value)) setSelectedCat([...selectedCategory, e.target.value])
    }
  
    const handleDeleteCategory = (e) => {
      e.preventDefault()
      setSelectedCat(selectedCategory.filter(c => c !== e.target.value))
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (Object.keys(err).length) return alert ('Please complete the form with the correct data')
      const newProduct = {
        name: input.name.trim(),
        description: input.description.trim(),
        height: input.height,
        weight: input.weight,
        price: input.price,
        offert: input.offert,
        stock: input.stock,
        image: input.image.trim(),
        category: selectedCategory
      }
      // chequear nombre action 
      dispatch(postProduct(newProduct))
    }
  
    useEffect(() => {
        // chequear nombre action 
      dispatch(getCategories())
    }, [dispatch])
  
    return (
        <div>
          <h1>Complete the form below to create a new product!</h1>
          <h5>Complete all fields</h5>
  
          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input value={input.name} name='name' onChange={handleChange} type='text' placeholder='Name' />
            {err.name && <p>{err.name}</p>}
            
            <label>Height</label>
            <input value={input.height} name='height' onChange={handleChange} type='number' placeholder='Height in cm' />
            {err.height && <p>{err.height}</p>}

            <label>Weight</label>
            <input value={input.weight} name='weight' onChange={handleChange} type='number' placeholder='Weight in lt' />
            {err.weight && <p>{err.weight}</p>}

            <label>Image</label>
            <input value={input.image} name='image' onChange={handleChange} type='text' placeholder='Image URL' />
            {err.image && <p>{err.image}</p>}

            <label>Description</label>
            <textarea value={input.description} name='summary' onChange={handleChange} placeholder='Description' />
            {err.description && <p>{err.description}</p>}

            <label>Price</label>
            <input value={input.price}  name='price' onChange={handleChange} type='number' placeholder='Price' />
            {err.price && <p>{err.price}</p>}

            <label>Stock</label>
            <input value={input.stock} name='stock' onChange={handleChange} type='number' placeholder='Stock units' />
            {err.stock && <p>{err.stock}</p>}

            <label>Discount</label>
            <input value={input.offert} name='offert' onChange={handleChange} type='number' placeholder='Discount in %' />
            {err.offert && <p>{err.offert}</p>}
  
            <label>Category</label>
            <select onChange={handleSelectDiet} defaultValue='DEFAULT'>
              <option value='DEFAULT' disabled>--select category--</option>
              {categories.map(category => <option value={category.name} key={category.id}>{category.name}</option>)}
            </select>
            <ul >
              {selectedCategory.map((category,id) => 
                <li key={id}>
                  {category}
                  <button value={category} onClick={handleDeleteCategory}>x</button>
                </li>
              )}
            </ul>
            <button disabled={isButtonDisabled()} type='submit'>Submit product</button>
          </form>
        </div>
    );
  }