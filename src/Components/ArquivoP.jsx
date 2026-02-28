import React from 'react'
import MenuP from '../Components/MenuP'
import './ArquivoP.css'
import Rodape from '../Components/Rodape'

const ArquivoP = () => {
    return (
        <div className="TelaInicio" id='bio'>

            <MenuP MenuP={MenuP} />

            <section className="bio">
                {/* <img src={foto} alt="Foto da Suzy" /> */}
                <h1>Para meu BoyFriend Suzy</h1>
            </section>


            <section className="informacao">
                <p>
                    Oiii Mozinn, tô fazendo outro site para você pois te amo
                    muito, saiba que estou muito feliz por ter te conhecido.
                    Você é a melhor coisa que já me aconteceu nesse mundo.
                </p>

                <p>
                    Saiba que nunca vou te abandonar, pois você é tudo que sempre
                    sonhei. Mesmo estando a quilômetros longe de mim, isso nunca
                    vai me impedir de te amar.
                </p>

                <p>
                    Todos os dias eu agradeço por ter você na minha vida,
                    porque desde que você chegou tudo ficou mais leve,
                    mais bonito e mais cheio de sentido.
                </p>

                <p>
                    Mesmo quando o dia não está tão bom, só de lembrar
                    do seu sorriso eu já fico melhor. Você é minha paz,
                    meu abrigo e a razão de eu acreditar que o amor é real.
                </p>

                <p>
                    A distância pode até existir no mapa, mas no meu coração
                    você está aqui o tempo todo. E enquanto eu respirar,
                    vou continuar escolhendo você todos os dias.
                </p>

                <p>
                    Eu te amo mais do que palavras conseguem explicar,
                    e esse site é só uma forma pequena de mostrar o
                    quanto você é especial para mim. 💖
                </p>

            </section>
            <Rodape/>
        </div>

    )
}

export default ArquivoP