/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect } from 'react';
import { useState } from 'react'
import { getLivros } from '../../servicos/livros';
import { postFavorito } from '../../servicos/favoritos';

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [ livros, setLivros ] = useState([]);
    
    async function fetchLivros() {
        const livrosAPI = await getLivros()
        setLivros(livrosAPI)
    }

    async function insertFavorito(id) {
        await postFavorito(id);
        alert("Livro adicionado aos favoritos com sucesso!")
    }

    useEffect(() => {
        fetchLivros();
    }, []);

    return (
        <div className="_bg-[linear-gradient(90deg,_#002F52_35%,_#326589_165%)] text-white text-center py-[85px] w-full">
            <div>
                <h1 className="text-white text-[36px] text-center w-full">Já sabe por onde começar?</h1>
                <h2 className="text-base mb-10">Encontre seu livro em nossa estante.</h2>
            </div>

            <form>
                <input className="border border-white bg-transparent rounded-full text-center px-6 py-4 w-[500px] text-white placeholder:text-white"
                    placeholder="Escreva sua próxima leitura"
                    id="proximaLeitura"
                    name="proximaLeitura"
                    onBlur={evento => {
                        const textoDigitado = evento.target.value
                        const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                        setLivrosPesquisados(resultadoPesquisa)
                    }}
                />
            </form>
            <div className="grid grid-cols-2 gap-6 mt-8 m-8 ">
                {livrosPesquisados.map((livro) => (
                    <div onClick={() => insertFavorito(livro.id)}
                        key={livro.nome}
                        className="flex items-center cursor-pointer hover:border hover:border-white"
                    >
                        <img src={livro.src} className="w-25" alt={livro.nome} />
                        <p className="ml-4">{livro.nome}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pesquisa