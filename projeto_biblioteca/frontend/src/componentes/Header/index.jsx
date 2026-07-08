import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-white flex justify-between px-8 p-1">
            <Link to="/"><Logo /></Link>
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header