import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount"
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom"

export const ItemDetail = ( {producto} ) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addProd} = useContext(CartContext)

   
    
    
    
    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)

        addProd(producto, quantity)
    }

    
    return(
        <article className="detalles-contenedor">
            <div className="contenedor-nombre">
                <div className="img-detalles">
                    <img src={producto.imagen} alt={producto.nombre} />
                </div>
                <div className="nombre-precio">
                    <h4>{producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className= "options"><button>Terminar compra</button></Link>
                        ) : (
                            <ItemCount  onAdd={handleOnAdd}  />
                        )
                    }
                </div>
            </div>
            <div className="descripcion">
                <p>DESCRIPCIÓN</p>
                <p>{producto.descripcion}</p>
            </div>
        </article>
    )
}