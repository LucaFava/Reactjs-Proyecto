import { Link } from 'react-router-dom';




export const Item = ({producto}) => {


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
            </div>
        </div>
    )
}