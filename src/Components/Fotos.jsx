import React from 'react'
import './Fotos.css'
import Rodape from '../Components/Rodape'

// Importando imagens da pasta assets
import foto1 from '../assets/fotos/foto1.png'
import foto2 from '../assets/fotos/foto2.png'
import foto3 from '../assets/fotos/foto3.png'
import foto4 from '../assets/fotos/foto4.png'

const fotosArray = [foto1, foto2, foto3, foto4]

const Fotos = () => {
  return (
    <div className="fotosContainer">
      <h2>Nossas Fotos</h2>
      <div className="cardsContainer">
        {fotosArray.map((foto, index) => (
          <div className="fotoCard" key={index}>
            <img src={foto} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </div>
      <Rodape />
    </div>
  )
}

export default Fotos