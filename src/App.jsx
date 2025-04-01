
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './modulos/Home';
import Nav from './modulos/Nav';
import Error404 from './modulos/Error404';


function App() {
 

  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    
      <Route path="/" element={<Home />} />

      <Route path='*' element={<Error404/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
