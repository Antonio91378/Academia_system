import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Principal from './pages/Pincipal';
import Config from './pages/Config';
import Pesquisar from './pages/Pesquisar';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Principal/>}/>
            <Route path='/config' element={<Config/>}/>
            <Route path='/pesquisar' element={<Pesquisar/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
