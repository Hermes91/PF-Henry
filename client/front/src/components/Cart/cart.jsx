import {useLocalStorage} from './../productDetails/useLocalStorage'
import s from './cart.module.css'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { clearCart, deletCartProduct } from '../../redux/actions/actionIndex';
import { useDispatch, useSelector } from "react-redux";
import { React, useState, useEffect } from "react";
import ButtonCheckout from '../ButtonCheckout/ButtonCheckout'

const ShopCart = () => {
    // const buyOrder = useSelector((state) => state.buyOrder);
    // const cart = useSelector((state) => state.cart);
    const [cart, setCart] = useLocalStorage('cart')
    const [product,SetProduct] = useState({})
    const [buyOrder,SetbuyOrder ] = useState(JSON.parse(localStorage.getItem('cart')))
    console.log(buyOrder)

   /* const buyOrder = [
        { id: 1, name: "Bonsai Pino rastrero", price: 11, quantity: 1 },
        { id: 2, name: "Cactus", price: 10, quantity: 2 },
    ]; */
    
    const clearCart = () => {
        SetbuyOrder([])
        setCart([])
      }

  if (!buyOrder) clearCart()

    const delFromCart = (id) => {
        console.log(id)
        console.log(buyOrder.length)
      const newCart = buyOrder.filter((el) => el.id !== id)
      console.log(newCart)
      SetbuyOrder(newCart)
      setCart(newCart)
     }

  

    const totalPrice = (array) => {
        var sum = 0 
        array.map((e) => {
            sum += e.price*e.quantity

        })
        return sum
    }

    var total = totalPrice(buyOrder.map(p => p))


     useEffect(() => {
        SetProduct({
            price:total,
            description: `Purchase from Vivero Henry at a price of $${product.price} USD`
        })
     },[buyOrder])


 
    return (<>
        <NavBar />
        <div className={s.cartContainer}>
            <div className={s.cardCart}>
                <div className={s.cartHead}>
                    <h3> Shopping Cart</h3>
                    <h4 className={s.remove} onClick={clearCart}>Remove all</h4>
                </div>

                <article className={s.box}>
                    {!buyOrder.length ? <h3>There's nothing in your cart</h3> : buyOrder.map((p, idx) => {
                        return (
                            <ul className={s.boxList}>
                                <li key={idx}>
                                    <h3>{p.name}</h3>
                                    <h4>${p.price}.00 x {p.quantity} = ${parseInt(p.price * p.quantity)}.00</h4>
                                    <button onClick={() => delFromCart(p.id)}>Remove</button>
                                </li>
                            </ul>
                        )
                    })}

                    <h3>total:${total}.00 </h3>
                    <div className={s.checkoutText}>Proceed to Checkout
                        <ButtonCheckout product={product}/>

                        </div>
                </article>
            </div>
        </div>

        <div className={s.footCart}>
            <Footer />
        </div>
    </>
    )
}

export default ShopCart