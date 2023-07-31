



export const ItemCount = ({restar, sumar, cantidad}) => {

    return(
        <>
        <div className="item-count">
            <button onClick={restar}>-</button>
            <p>{cantidad}</p>
            <button onClick={sumar}>+</button>
        </div>
        <div>
            <button className="comprar">Agregar al carrito</button>
        </div>




        </>
    )
}