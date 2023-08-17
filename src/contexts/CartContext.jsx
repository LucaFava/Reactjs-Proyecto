import { createContext } from "react";
import { useState } from "react"

 export const CartContext = createContext([])


 export const CartContextProvider = ({children}) => {
   const [cart, setCart] = useState([])

   console.log(cart);

   const addItem = (item, quantity) => {
      if (!isInCart(item.id)) {
         setCart(prev => [...prev, {...item, quantity}])
      } else {
         console.log("el producto ya fue agregado");
      }
   }
   const removeItem = (itemId) => {
      const cartUpdate = cart.filter(prod => prod.id !== itemId )
      setCart(cartUpdate)
   }
   const clearCart = () => {
      setCart([])
   }
   const isInCart = (itemId) => {
      return cart.some(prod => prod.id === itemId)
   }





   return(
      <CartContext.Provider>
         {children}
      </CartContext.Provider>
   )
 }

