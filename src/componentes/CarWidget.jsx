import { useContext } from "react"
import cart from "../assets/cart.svg"
import { Link } from "react-router-dom"
import { CartContext } from "../contexts/CartContext"


export const CartWidget = () => {

const { cantidadCart } = useContext(CartContext)

return(

    <Link to="/cart"> <img src= {cart} alt="carrito"/><span>{cantidadCart()}</span></Link>
)
    

}