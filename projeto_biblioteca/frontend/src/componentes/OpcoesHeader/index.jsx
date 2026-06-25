const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {
    return (
        <div className="flex">
            {textoOpcoes.map((texto) => (
                <div
                    key={texto}
                    className="text-base flex justify-center items-center text-center
                        h-full px-[5px] cursor-pointer min-h-30"
                >
                    <p>{texto}</p>
                </div>
            ))}
        </div>
    )
}

export default OpcoesHeader