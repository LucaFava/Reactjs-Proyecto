export const ItemDetail = ( {item} ) => {
    
    
    
    return(
        <section>
            <article className="detalles-contenedor">
                <div className="img-detalle">
                    <img src="" alt="" />
                </div>
                <div className="detalles">
                    <h4>{item.nombre}</h4>
                    <p>precio: ${item.precio}</p>
                    <p>marca: {item.marca}</p>
                </div>
            </article>
        </section>
    )
}