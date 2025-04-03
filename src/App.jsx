
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './modulos/Home';
import Nav from './modulos/Nav';
import Error404 from './modulos/Error404';
import Dato from './modulos/Dato';


function App() {
 

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    
      <Route path="/" element={<Home />} />
      <Route path='/dato/:letra' element={<Dato/>}/>
      <Route path='*' element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
