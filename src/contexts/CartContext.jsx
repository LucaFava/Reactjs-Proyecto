import { createContext } from "react";


const CartContext = createContext([])

 export const Provider = ({ children }) => (
    <CartContext.Provider value={[]}>{ children }</CartContext.Provider>
)