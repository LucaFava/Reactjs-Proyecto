import { useContext, useState } from "react"
import { CartContext } from "../contexts/CartContext"
import { Link } from "react-router-dom"
import { CartItem } from "./CartItem"

export const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)

    return (
        <div className="contenedor-cart">
            
        </div>
    )

}