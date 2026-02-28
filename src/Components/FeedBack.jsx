import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './FeedBack.css'
import Rodape from '../Components/Rodape'

const FeedBack = () => {
    const form = useRef()
    const [status, setStatus] = useState('')

    const sendEmail = (e) => {
        e.preventDefault()
        
        emailjs.sendForm(
            'service_skdenat',    // substitua pelo seu Service ID
            'template_uo37wpi',   // substitua pelo seu Template ID
            form.current,
            'aoSq9gk2hmMBE7rCC'     // substitua pelo seu Public Key
        )
            .then((result) => {
                console.log(result.text)
                setStatus('Mensagem enviada com sucesso!')
                form.current.reset()
            }, (error) => {
                console.log(error.text)
                setStatus('Erro ao enviar, tente novamente.')
            })
    }

    return (
        <div className="feedbackContainer">
            <h2>Envie seu Feedback</h2>
            <form ref={form} onSubmit={sendEmail}>
                <label>Nome:</label>
                <input type="text" name="user_name" placeholder="Seu nome" required />

                <label>E-mail:</label>
                <input type="email" name="user_email" placeholder="Seu e-mail" required />

                <label>Mensagem:</label>
                <textarea name="message" placeholder="Sua mensagem" required />

                <button type="submit">Enviar</button>
            </form>

            {status && <p className="statusMsg">{status}</p>}

            <Rodape Rodape={Rodape} />
        </div>
    )
}

export default FeedBack