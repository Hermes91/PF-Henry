
import s from './cart.module.css'
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { clearCart } from '../../redux/actions/actionIndex';

const ShopCart = () => {


    const buyOrder = [
        { id: 1, name: "Bonsai Pino rastrero", price: 11, quantity: 1 },
        { id: 2, name: "Cactus", price: 10, quantity: 2 },
    ];


    const delFromCart = () => { }



    function totalPrice(array) {
        let sum = array.reduce((x, y) => {
            return x + y
        })
        return sum
    }

    return (<>
        <NavBar />
        <div className={s.cartContainer}>
            <div className={s.cardCart}>
                <div className={s.cartHead}>
                    <h3> Shopping Cart</h3>
                    <h4 className={s.remove} onClick={clearCart()}>Remove all</h4>
                </div>

                <article className={s.box}>
                    {!buyOrder.length ? <h3>there's nothing in your cart</h3> : buyOrder.map((p, idx) => {
                        return (
                            <ul className={s.boxList}>
                                <li key={idx}>
                                    <h3>{p.name}</h3>
                                    <h4>${p.price}.00 x {p.quantity} = ${parseInt(p.price * p.quantity)}.00</h4>
                                    <button onClick={delFromCart(p.id)}>Remove</button>
                                </li>
                            </ul>
                        )
                    })}
                    <h3>total:${totalPrice(buyOrder.map(p => p.price))}.00 </h3>
                    <div className={s.checkoutText}>Proceed to Checkout
                        <button className={s.checkout}>PayPal</button></div>
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