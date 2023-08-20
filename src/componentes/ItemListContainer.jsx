import { useState, useEffect } from "react"
import { ItemList } from "./ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where, getFirestore } from "firebase/firestore"
 
// Este componente solo se encarga de proporcionarle la lógica a los demás componentes que va a tener dentro.

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    const categoria = useParams().categoria
    
    const [titulo, setTitulo] = useState("PRODUCTOS")

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()

        // la referencia de la coleccion tiene una condicion para filtrar los productos
        const collectionRef = categoria ? query(collection(db, "productos"), where("categoria", "==", categoria)): collection(db, "productos")

        getDocs(collectionRef).then((snapshot) => {
            if (snapshot.size === 0) {
                <div>
                    NO SE ENCONTRARON PRODUCTOS
                </div>
            } else {
                setProductos(snapshot.docs.map((doc) => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                }))
            }
        })
        .finally(() => {
            setLoading(false)
        })
    },[categoria])










    return (
        <div><ItemList productos = {productos} titulo = {titulo}/></div>
    )
}