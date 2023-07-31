import { pedirDatos } from "../pedirDatos"
import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"

// Este componente solo se encarga de proporcionarle la lógica a los demás componentes que va a tener dentro.

export const ItemListContainer = () => {

    
    const [productos, setProductos] = useState([])
    const categoria = useParams().categoria
    
    const [titulo, setTitulo] = useState("PRODUCTOS")


    useEffect(() => {
      pedirDatos()
        .then((res) => {
            if (categoria) {
                setProductos(res.filter((prod) => prod.categoria === categoria))
                setTitulo(categoria)
            } else{
                setProductos(res)
            }
            
        })
    }, [categoria])


    return (
        <div><ItemList productos = {productos} titulo = {titulo}/></div>
    )
}