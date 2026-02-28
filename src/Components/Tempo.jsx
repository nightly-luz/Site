import React, { useEffect, useState } from 'react'
import './Tempo.css'
import Rodape from '../Components/Rodape'

const Tempo = () => {

  // DATA DE INÍCIO
  const dataInicio = new Date("2025-06-20T00:00:00")

  const [tempo, setTempo] = useState({anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0})

  useEffect(() => {

    const interval = setInterval(() => {
      const agora = new Date()
      let diferenca = agora - dataInicio

      // calcular anos
      const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365))
      diferenca -= anos * (1000 * 60 * 60 * 24 * 365)

      // calcular meses
      const meses = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 30))
      diferenca -= meses * (1000 * 60 * 60 * 24 * 30)

      // calcular dias
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24))
      diferenca -= dias * (1000 * 60 * 60 * 24)

      // horas, minutos, segundos
      const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24)
      const minutos = Math.floor((diferenca / (1000 * 60)) % 60)
      const segundos = Math.floor((diferenca / 1000) % 60)

      setTempo({anos, meses, dias, horas, minutos, segundos})

    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <div className='tempo' id='cronometro'>

      <h2> Estamos juntos há 💖</h2>

      <div className='contador'>
        {/* Mostra anos ou meses */}
        {tempo.anos > 0 ? (
          <div>
            <span>{tempo.anos}</span>
            <p>{tempo.anos === 1 ? 'Ano' : 'Anos'}</p>
          </div>
        ) : (
          <div>
            <span>{tempo.meses}</span>
            <p>{tempo.meses === 1 ? 'Mês' : 'Meses'}</p>
          </div>
        )}

        <div>
          <span>{tempo.dias}</span>
          <p>{tempo.dias === 1 ? 'Dia' : 'Dias'}</p>
        </div>

        <div>
          <span>{tempo.horas}</span>
          <p>Horas</p>
        </div>

        <div>
          <span>{tempo.minutos}</span>
          <p>Min</p>
        </div>

        <div>
          <span>{tempo.segundos}</span>
          <p>Seg</p>
        </div>
      </div>

      <p className='fraseExtra'>
        E cada segundo ao seu lado é o meu favorito. ✨
      </p>

    <div className='rodapeCentro'>
     <Rodape Rodape={Rodape}/>
    </div>
</div>
  )
}

export default Tempo