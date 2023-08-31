import { useContext, useState, useEffect } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "./CartItem"

export const Cart = () => {
    const {cart, clearCart, cantidadCart} = useContext(CartContext)

    if (cart.lenght === 0) {
        <div>
            <p>NO HAY PRODUCTOS EN EL CARRITO</p>
            <button><Link to= "/" className="option">Volver a productos</Link></button>
        </div>
    
    }
    



    return (
        <>
            <div className="contenedor-cart">
                {cart.map(p => <CartItem key={p.id} {...p} producto={p}/>)}
            </div>
            <div className="botones-cart">
                <button onClick={() => clearCart()}>Vaciar carrito</button>
                <button>Checkout</button>
            </div>
        </>
        
    )

}