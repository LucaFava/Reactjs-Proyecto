import { Link } from 'react-router-dom';
import { useContext } from "react"
import { CartContext } from '../contexts/CartContext';



export const Item = ({producto}) => {

  const {addProd} = useContext(CartContext)

    return(
        <div className='card'> 
            <div className='img-contenedor'>
              <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className='texto-card'>
              <h3>{producto.nombre}</h3>
              <p>${producto.precio}</p>
            </div>
            <div className='botones-card'>
              <Link to={`/item/${producto.id}`}><button>Ver más</button></Link>
              <button onClick={()=>addProd(producto, 1)}>Agregar al carrito</button>
            </div>
        </div>
    )
}