import { CartContext } from "../contexts/CartContext"
import { useContext } from "react"



export const CartItem = ({producto}) => {
    const { removeProd } = useContext(CartContext)


    return (

        <div className="contenedor-itemCart">
            <div className="img-cart">
                <img src={producto.imagen} alt={producto.nombre} />
                <p><b>{producto.nombre}</b></p>
            </div> 
            <div className="datos-cart">
                <p>${producto.precio}</p>
                <p><b>Cantidad:</b>{producto.cantidad}</p>
            </div>
            <div className="boton-eliminar">
                <button onClick={() => removeProd}>Eliminar producto</button>
            </div>
        </div>
    )
}