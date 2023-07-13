import { Link } from "react-router-dom"
import { CartWidget } from "./CarWidget"



export const NavBar = () => {




    return(
        <nav className="navbar">
            <div className="titulo"><Link to="/"><h1>PERISFAVA</h1></Link></div>
            <ul className="menu">
                <li><Link  className="links" to="/productos">TODOS</Link></li>
                <li><Link  className="links" to="/productos/auriculares" >AURICULARES</Link></li>
                <li><Link  className="links" to="/productos/teclados">TECLADOS</Link></li>
                <li><Link  className="links" to="/productos/pads">PADS</Link></li>
                <li><Link  className="links" to="/productos/mouses">MOUSES</Link></li>
            </ul>
            <div className="carrito-contenedor">
                <CartWidget/>
            </div>
        </nav>
    )
}