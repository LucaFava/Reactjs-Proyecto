import { Item } from "./Item"


// Este componente se va a encargar de "dibujar" los productos en nuestra web

export const ItemList = ({productos, titulo}) => {


    return(
        <section className="productos-section">
            <h1>{titulo}</h1>
            <article className="productos-contenedor">
                {productos.map((producto) => <Item key={producto.id} producto = {producto}/>)}
            </article>
        </section>
    )
}