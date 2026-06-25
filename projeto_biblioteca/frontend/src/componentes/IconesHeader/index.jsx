import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const icones = [perfil, sacola]

function IconesHeader() {
    return (
            <div className="flex items-center">
                { icones.map( (icone) => (
                    <div key={icone} className="mr-10 w-6.25">
                        <img src={icone}></img>
                    </div>
                )) }
            </div>
    )
}

export default IconesHeader