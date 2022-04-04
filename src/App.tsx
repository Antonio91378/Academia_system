import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Principal from './pages/Pincipal';
import Cadastrar from './pages/Cadastrar';
import Pesquisar from './pages/Pesquisar';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/pesquisar' element={<Pesquisar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
