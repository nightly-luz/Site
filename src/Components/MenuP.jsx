import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import musica from '../assets/musica/origami.mp3'
import './MenuP.css'

const MenuP = () => {
  const audioRef = useRef(null)
  const sidebarRef = useRef(null)
  const hamburgerRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // Alterna reprodução da música
  const toggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      audio.volume = 0.05
      audio.play()
      setIsPlaying(true)
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  // Alterna sidebar (abre/fecha)
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev)
  }

  // Fecha sidebar ao clicar fora (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSidebarOpen])

  return (
    <>
      {/* Botão hamburguer */}
      <button
        ref={hamburgerRef}
        className={`hamburgerButton ${isSidebarOpen ? 'open' : ''}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      {/* Menu */}
      <header ref={sidebarRef} className={`MenuSuperior ${isSidebarOpen ? 'sidebarOpen' : ''}`}>
        <nav className="navLinks">
          {[
            { to: '/', label: 'Início' },
            { to: '/tempo', label: 'Nosso tempo juntos' },
            { to: '/fotos', label: 'Fotos' },
            { to: '/feedback', label: 'Feedback' }
          ].map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsSidebarOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão de música */}
        <button className="musicButton" onClick={toggleMusic}>
          {isPlaying ? '⏸ Pausar' : '🎵 Música'}
        </button>

        <audio ref={audioRef} loop>
          <source src={musica} type="audio/mp3" />
        </audio>
      </header>
    </>
  )
}

export default MenuP