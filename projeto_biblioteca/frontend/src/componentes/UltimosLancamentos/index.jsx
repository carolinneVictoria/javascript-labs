import { livros } from './dadosUltimosLancamentos'
import Titulo from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/livro2.png'

function UltimosLancamentos() {
    return (
        <div className="bg-amber-50 pb-5 flex flex-col">
            <Titulo className="text-[#EB9B00] text-4xl">
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <div className="mt-[30px] flex w-full justify-center cursor-pointer">
                {livros.map( livro => (
                    <img key={livro.id} src={livro.src} alt={livro.nome}/>
                ))}
            </div>
            <CardRecomenda
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro}
            />
        </div>
    )
}

export default UltimosLancamentos