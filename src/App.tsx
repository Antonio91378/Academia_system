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
import ProcessoosAtivos from './pages/processosAtivos';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/cadastrar' element={<Cadastrar/>}/>
            <Route path='/pesquisar' element={<Pesquisar/>}/>
            <Route path='/open' element={<ProcessoosAtivos/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
