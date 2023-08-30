export const CartItem = ({producto,cart}) => {



    return (

        <div className="item-cart"> 
            <p className="nombre">{cart.nombre}</p>
            <p className="datos-cart"><b>cantidad:</b>xx</p>
            <p className="datos-cart"><b>precio x unidad:</b></p>
            <p className="datos-cart"><b>Subtotal:</b>$99999</p>

        </div>
    )
}