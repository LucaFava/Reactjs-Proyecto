import data from "./productos.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

// Hacer una funcion que en vez de devolverme el array completo de productos, que me devuelva por ID

export const pedirItemId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((prod) => prod.id === id)

        if (item) {
            resolve(item)
        } 
    })
}