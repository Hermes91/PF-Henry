import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch } from "react-redux";

// --importo actions que traiga by name-- //

// --importo style-- //
import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar() {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    let history = useHistory ();

    const handleInput = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };

    const handleInputSubmit = (e) => {
        e.preventDefault();
       // dispatch(getByName(name));
       history.push('/shop')
        setName({
          name: "",
        });
      };

   return (
    <div className={style.backimg}>
        <div className={style.components}>
            <form className={style.searchBar}>
                <input
                className = {style.input}
                onChange = {(e) => handleInput(e)}
                placeholder = 'Search...'
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