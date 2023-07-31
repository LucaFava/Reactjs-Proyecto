import { useContext, useState } from "react";
import { ItemCount } from "./ItemCount"


export const ItemDetail = ( {item} ) => {
    // LOGICA DEL CONTEXT
    
   
    // FUNCIONES DE LOS BOTONES DEL DETAIL

    const [cantidad, setCantidad] = useState(1)

    

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    const sumar = () => {
        if (cantidad) {
            setCantidad(cantidad + 1)
        }
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
                    <ItemCount  cantidad={cantidad} restar={restar} sumar={sumar} />
                </div>
            </div>
            <div className="descripcion">
                <p>DESCRIPCIÓN</p>
                <p>{item.descripcion}</p>
            </div>
        </article>
    )
}