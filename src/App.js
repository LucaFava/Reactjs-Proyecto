import './App.css';
import { ItemListContainer } from './componentes/ItemListContainer';
import { NavBar } from './componentes/NavBar';
import { ItemDetailContainer } from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContext } from './contexts/CartContext';
import { useState } from 'react'

function App() {
  
  

  return (
    <div>
      <CartContext.Provider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
            <Route path='/productos' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
        </CartContext.Provider>
    </div>
  );
}

export default App;
