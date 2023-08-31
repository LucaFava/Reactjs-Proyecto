import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { Cart } from './componentes/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CONTEXT
import { CartContextProvider } from './contexts/CartContext';
// FIREBASE
// import { getFirestore, getDoc, collection, doc, query, where, limit, getDocs } from "firebase/firestore"
// import { useEffect } from 'react';

function App() {
  // FUNCION DEL CARTWIDGET

  


  // TRAER UN SOLO OBJETO
  //  useEffect(() => {
  //    const db = getFirestore()

  //  const refDoc = doc(db, "productos", "0e7whqPOx8hyIr966qd0")
  
  //  getDoc(refDoc).then((snapshot) => {
  //    console.log({id : snapshot.id, data: snapshot.data()});
  //  })
  //   }, [])

  // TRAER TODOS LOS OBJETOS

  // useEffect(() => {
  //   const db = getFirestore()

  //   const refCollection = collection(db, "productos")

  //   getDocs(refCollection).then((snapshot) => {
  //     if (snapshot.size === 0) {
  //       console.log("no results");
  //     } else {
  //       console.log(
  //         snapshot.docs.map((doc) => {
  //           return {id:doc.id, data:doc.data()}
  //         })
  //       );
  //     }
  //   })
  // }, [])

// QUERY, LIMIT, WHERE

// const db = getFirestore()

// const q = query(
//   collection(db, "productos"),
//   where("categoria", "==", "pad"),
//   limit (10)
// )

// getDocs(q).then((snapshot) => {
//   if (snapshot.size === 0) {
//     console.log("no results");
//   } else {
//     console.log(
//       snapshot.docs.map((doc) => {
//         return {id: doc.id, data: doc.data() }
//       })
//     );
//   }
// })

  return (
    <div>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout'/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>  
    </div>
  );
}

export default App;
