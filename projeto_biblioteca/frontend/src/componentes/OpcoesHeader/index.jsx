import { Link } from "react-router-dom"

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <div className="flex gap-4.5">
            {textoOpcoes.map((texto) => (
                <div
                    key={texto}
                    className="text-base flex justify-center items-center text-center
                        h-full px-[5px] cursor-pointer min-h-30"
                >
                    <Link to={`/${texto.toLowerCase()}`}><p>{texto}</p></Link>
                </div>
            ))}
        </div>
    )
}

export default OpcoesHeader