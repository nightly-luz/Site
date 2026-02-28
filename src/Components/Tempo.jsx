import React, { useEffect, useState } from 'react'
import './Tempo.css'
import Rodape from '../Components/Rodape'

const Tempo = () => {

  // DATA DE INÍCIO
  const dataInicio = new Date("2025-06-20T00:00:00")

  const [tempo, setTempo] = useState({ anos: 0, meses: 0, dias: 0, horas: 0, minutos: 0, segundos: 0 })

  useEffect(() => {
    const atualizarTempo = () => {
      const agora = new Date();

      let anos = agora.getFullYear() - dataInicio.getFullYear();
      let meses = agora.getMonth() - dataInicio.getMonth();
      let dias = agora.getDate() - dataInicio.getDate();

      if (dias < 0) {
        meses -= 1;
        const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0);
        dias += ultimoMes.getDate();
      }

      if (meses < 0) {
        anos -= 1;
        meses += 12;
      }

      const horas = agora.getHours() - dataInicio.getHours();
      const minutos = agora.getMinutes() - dataInicio.getMinutes();
      const segundos = agora.getSeconds() - dataInicio.getSeconds();

      setTempo({
        anos,
        meses,
        dias,
        horas: horas < 0 ? horas + 24 : horas,
        minutos: minutos < 0 ? minutos + 60 : minutos,
        segundos: segundos < 0 ? segundos + 60 : segundos
      });
    };

    const interval = setInterval(atualizarTempo, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='tempo' id='cronometro'>

      <h2> Estamos juntos há 💖</h2>

      <div className='contador'>
        {/* Linha 1: Meses ou Anos */}
        <div className='tempoMaior'>
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
        </div>

        {/* Linha 2: Dias e Horas */}
        <div className='linha'>
          <div>
            <span>{tempo.dias}</span>
            <p>{tempo.dias === 1 ? 'Dia' : 'Dias'}</p>
          </div>
          <div>
            <span>{tempo.horas}</span>
            <p>Horas</p>
          </div>
        </div>

        {/* Linha 3: Minutos e Segundos */}
        <div className='linha'>
          <div>
            <span>{tempo.minutos}</span>
            <p>Min</p>
          </div>
          <div>
            <span>{tempo.segundos}</span>
            <p>Seg</p>
          </div>
        </div>
      </div>

      <p className='fraseExtra'>
        E cada segundo ao seu lado é o meu favorito. ✨
      </p>
      <div className='rodapeCentro'>
        <Rodape />
      </div>
    </div>
  )
}

export default Tempo