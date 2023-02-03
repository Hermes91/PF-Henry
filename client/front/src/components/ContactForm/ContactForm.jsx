import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validate from './validate';

export default function CreateForm() {
    const dispatch = useDispatch()
    const [error, setError] = useState({})
    const [input, setInput] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
        setError(validate(({...input, [e.target.name]: e.target.value})))
      }
    console.log(error)

    const isButtonDisabled = () => Object.keys(error).length > 0

    const handleSubmit = (e) => {
        e.preventDefault()
    
        const newMessage = {
          name: input.name.trim(),
          lastname: input.lastname.trim(),
          phone: input.phone,
          email: input.email,
          message: input.message.trim(),
        }

        //action? 
        setInput({name: "", lastname: "", phone: "", email: "", message: ""})
        alert("Thank you! Your message was sent correctly")
    }

    return (
        <div>

            <h3>Contact Us</h3>
            <h5>Complete the form below to send us a message</h5>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input value={input.name} name='name' onChange={handleChange} type='text' placeholder='Name' />
                {error.name && <p>{error.name}</p>}
                <label>Lastname</label>
                <input value={input.lastname} name='lastname' onChange={handleChange} type='text' placeholder='Lastname' />
                {error.lastname && <p>{error.lastname}</p>}
                <label>Phone number</label>
                <input value={input.phone} name='phone' onChange={handleChange} type='text' placeholder='+XX XXX XXXXX' />
                {error.phone && <p>{error.phone}</p>}
                <label>Email address</label>
                <input value={input.email} name='email' onChange={handleChange} type='text' placeholder='email@example.com' />
                {error.email && <p>{error.email}</p>}
                <label>Message</label>
                <textarea value={input.message} name='message' onChange={handleChange} placeholder='Write your message here...' />
                {error.message && <p>{error.message}</p>}

                <button disabled={isButtonDisabled()} type='submit'>Send</button>
            </form>
        </div>
    )
}