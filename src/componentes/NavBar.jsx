import { Link } from "react-router-dom"
import { CartWidget } from "./CarWidget"



export const NavBar = () => {




    return(
        <nav className="navbar">
            <div className="titulo"><Link to="/"><h1>PERISFAVA</h1></Link></div>
            <ul className="menu">
                <li><Link  className="links" to="/productos">TODOS</Link></li>
                <li><Link  className="links" to="/productos/auricular" >AURICULARES</Link></li>
                <li><Link  className="links" to="/productos/teclado">TECLADOS</Link></li>
                <li><Link  className="links" to="/productos/pad">PADS</Link></li>
                <li><Link  className="links" to="/productos/mouse">MOUSES</Link></li>
            </ul>
            <div className="carrito-contenedor">
                <CartWidget/>
            </div>
        </nav>
    )
}