import Input from '../Input'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <div className="bg-linear-gradient(90deg, #002F52 35%, #326589 165%) text-white text-center py-21.25 px-0 h-117.5 w-full">
            <div className="text-white text-[36px] text-center w-full">
                Já sabe por onde começar?
            </div>
            <div className="text-base leading-[500] mb-10">
                Encontre seu livro em nossa estante.
            </div>
            <Input
                placeholder="Escreva sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <div className="flex justify-center items-center mb-5 cursor-pointer hover:border border-white-1">
                    <img src={livro.src} className="w-25"/>
                    <p className="w-50">{livro.nome}</p>
                </div>
            ) ) }
        </div>
    )
}

export default Pesquisa