import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount"
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom"

export const ItemDetail = ( {item} ) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (quantity) =>{
        setQuantityAdded(quantity)
    }

    
    return(
        <article className="detalles-contenedor">
            <div className="contenedor-nombre">
                <div className="img-detalles">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="nombre-precio">
                    <h4>{item.nombre}</h4>
                    <p>${item.precio}</p>
                    {
                        quantityAdded > 0 ? (
                            <Link to='/cart' className= "options"><button>Terminar compra</button></Link>
                        ) : (
                            <ItemCount  onAdd={handleOnAdd} />
                        )
                    }
                </div>
            </div>
            <div className="descripcion">
                <p>DESCRIPCIÓN</p>
                <p>{item.descripcion}</p>
            </div>
        </article>
    )
}