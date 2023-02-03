import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    let navigate = useNavigate();

    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
        // dispatch(getByName(name));
        navigate('/shop')
        setName({
            name: "",
        });
    };

    return (
        <div className={style.backimg}>
            <div>
            <FontAwesomeIcon icon={faBars} className={style.icon}  alt='Bars icon' />
            </div>
            <div className={style.components}>
                <form className={style.searchBar}>
                    <input
                        className={style.input}
                        onChange={(e) => handleInput(e)}
                        placeholder='Search...'
                        maxLength="30"
                    />
                    <input
                        onClick={(e) => handleInputSubmit(e)}
                        className={style.submit}
                        type='submit'
                        value='Search!'
                    />
                </form>
            </div>
        </div>
    )


}