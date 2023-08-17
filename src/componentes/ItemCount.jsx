import { useState } from "react"



export const ItemCount = ({onAdd}) => {


const [quantity, setQuantity] = useState(1)

const restar = () => {
    if (quantity > 1) {
        setQuantity(quantity - 1)
    }
}

const sumar = () => {
    if (quantity) {
        setQuantity(quantity + 1)
    }
}
    

    return(
        <>
            <div className="item-count">
                <button onClick={restar}>-</button>
                <p>{quantity}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button className="comprar"  onClick={() => onAdd(quantity)}>Agregar al carrito</button>
            </div>
        </>
    )
}