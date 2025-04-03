import React from 'react'
import {NavLink} from 'react-router-dom';

function Nav() {
    const reyes=[
        {
            nombre:"Atanagildo",
            reinado:15,
            vacasComidas:9
        },{
            nombre:"Ervigio",
            reinado:7,
            vacasComidas:3
        },{
            nombre:"Ataúlfo",
            reinado:5,
            vacasComidas:16
        },{
            nombre:"Leovigildo",
            reinado:18,
            vacasComidas:3
        },{
            nombre:"Sisebuto",
            reinado:9,
            vacasComidas:13
        },{
            nombre:"Recesvinto",
            reinado:19,
            vacasComidas:11
        }
      ]
      
  return (

    <nav>
        <NavLink to='/'>Home</NavLink>
       {reyes.map((rey, index)=>(
        <div key={index}>
        <NavLink to={`/dato/${rey.nombre}`}>
        <div>
       
        {rey.nombre}

        </div>
        </NavLink>
        </div>
        
       ))}
    </nav>
  )
}

export default Nav
