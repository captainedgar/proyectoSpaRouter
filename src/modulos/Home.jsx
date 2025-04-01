import React from 'react'

function Home() {
    const img = 'https://www.html6.es/img/rey_';
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
    <div className='reyes-container'>
    {reyes.map((rey, index) =>(
  <div key={index} className='reyes'>
    <img src={`${img}${rey.nombre.toLowerCase()}.png`} alt={rey.nombre} />
    <div>{rey.nombre}</div>
  </div>

    ))}
    </div>
    
  )
}

export default Home
