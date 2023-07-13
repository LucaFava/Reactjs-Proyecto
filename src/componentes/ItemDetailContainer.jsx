import { useState, useEffect } from "react"
import { pedirItemId } from "../pedirDatos"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"


export  const ItemDetailContainer = () => {
    
    
    const [item, setItem] = useState({})
    // useParams es un hook que nos devuelve un objeto con los parametros que hay en nuestra url
    const id = useParams().id
    console.log(id);
    
    useEffect(() => {
      pedirItemId(id)
        .then((res) => {
            setItem(res)
        })
    
    }, [id])
    
    
    
    return(
        <div>
             <ItemDetail item={item}/>
        </div>
    )
}