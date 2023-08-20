import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "./CartItem"

export const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)

    const [cartProd, setCartProd] = useState([])
 

    return (
        <div className="contenedor-cart">
            <div className="botones-cart">
                {cart.map(p => <CartItem key={p.id} {...p}/>)}
                <p className="total-cart">Total : $99999</p>
                <button onClick={() => clearCart()} className="limpiar-cart">Limpiar carrito</button>
                <Link to="/"><button className="checkout">Checkout</button></Link>
            </div>
        </div>
    )

}