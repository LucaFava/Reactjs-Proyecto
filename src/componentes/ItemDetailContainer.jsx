import { useState, useEffect } from "react"
import { ItemDetail } from "./ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc, getFirestore } from "firebase/firestore"

export  const ItemDetailContainer = () => {
    
    
    const [productos, setProductos] = useState(null)

    // useParams es un hook que nos devuelve un objeto con los parametros que hay en nuestra url
    const id = useParams().id

    const [loading, setLoading] = useState(false)

    // LÓGICA REEMPLAZADA POR FIRESTORE

    useEffect(() => {
        setLoading(true)

        const db = getFirestore()

        const docRef = doc(db, "productos", id)

        getDoc(docRef)
        .then(doc => {
            const data = doc.data()
            const prodAdapted = {id: doc.id, ...data}

            setProductos(prodAdapted)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [id])
    
    
    return(
        <section className="section-detalles">
             {productos && <ItemDetail producto={productos}/>}
        </section>
    )
}