import { useDispatch } from "react-redux";

// --Importo styles-- //
import style from './filters.module.css'


export default function Filters() {

    const dispatch = useDispatch();


    // --Handels-- //

    function handleFilterByName(e) {
    e.preventDefault();
   // dispatch(filterByName(e.target.value));
     }
  function handleFilterByPrice(e) {
    e.preventDefault();
   // dispatch(filterByPrice(e.target.value));
     }


    return (
        <div className={style.content}>
            <div className={style.filters}>
                {/* -- BY NAME-- */}
                <select className={style.filters} onChange={(e) => handleFilterByName(e)}>
                    <option hidden>By Name</option>   
                    <option value='A-Z'>By A-Z</option>
                    <option value='Z-A'>By Z-A</option>
                    </select>
                {/* --BY PRICE-- */}
                <select className={style.filters} onChange={(e) => handleFilterByPrice(e)}>
                    <option hidden>By Price</option>
                    <option value='maxPrice'>Max-Min</option>
                    <option value='minPrice'>Min-Max</option>
                </select>
            </div>
        </div>
     )

}