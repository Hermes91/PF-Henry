import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import s from './UserComponent.module.css';
import { useAuth0 } from "@auth0/auth0-react";
import validateAccount from './validateAccount';
import { updateUser } from "../../redux/actions/actionIndex";


export default function EditAccount() {
    const { user, isAuthenticated } = useAuth0()
    const dispatch = useDispatch()


    const [error, setError] = useState({})


    const [input, setInput] = useState({
        username: "",
        addressLineOne: "",
        addressLineTwo: "",
        telephone: "",
        birthday: "",
        picture: "",
        email: user.email

    })


    function onInputChange(e) {
        setInput({ ...input, [e.target.name]: e.target.value })
        setError(validateAccount(({ ...input, [e.target.name]: e.target.value })))
    }


    const isButtonDisabled = () => !(input.username) || (Object.keys(error).length)


    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(updateUser(input))
        setInput({ username: "", addressLineOne: "", addressLineTwo: "", telephone: "", birthday: "", picture: "", email: user.email, })
        alert("Thank you! Your message was sent correctly")
    }


    return (
        isAuthenticated &&
        <>
            <div className={s.EditContainer}>
                <div className={s.EditCard}>
                    <h3>  Add your information for billing</h3>

                    <form onSubmit={handleSubmit}>
                        <div className={s.formInput}>
                            <label htmlFor=''>Address:</label>
                            <input onInput={onInputChange} name='addressLineOne' type="text" placeholder="Set a billing address." value={user.addressLineOne} />
                            {error.addressLineOne && <span className={s.formerror}>{error.addressLineOne}</span>}
                        </div>
                        <div className={s.formInput}>
                            <label htmlFor=''>City:</label>
                            <input onInput={onInputChange} name='addressLineTwo' type="text" placeholder="Add your city." value={user.addressLineTwo} />
                            {error.addressLineTwo && <span className={s.formerror}>{error.addressLineTwo}</span>}
                        </div>
                        <div className={s.formInput}>
                            <label htmlFor=''>Phone:</label>
                            <input onInput={onInputChange} name='telephone' type="text" placeholder="Add your phone-number." value={user.telephone} />
                            {error.telephone && <span className={s.formerror}>{error.telephone}</span>}
                        </div>
                        <div className={s.formInput}>
                            <label htmlFor=''>Username:</label>
                            <input onInput={onInputChange} name='username' type="text" placeholder="Change your username." value={user.username} />
                            {error.username && <span className={s.formerror}>{error.username}</span>}
                        </div>
                        <div className={s.formInput}>
                            <label htmlFor=''>Birthday:</label>
                            <input onInput={onInputChange} name='birthday' type="text" maxLength={10} placeholder="Share your birthday." value={user.birthday} />
                            {error.birthday && <span className={s.formerror}>{error.birthday}</span>}
                        </div>
                        <div className={s.formInput}>
                            <label htmlFor=''>Profile Pic:</label>
                            <input onInput={onInputChange} name='picture' type="url" placeholder="Change your avatar." />

                        </div>
                        <div >
                            <button disabled={isButtonDisabled()} type='submit' >SEND</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}