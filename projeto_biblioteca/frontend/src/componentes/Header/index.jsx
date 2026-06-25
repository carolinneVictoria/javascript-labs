import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header() {
    return (
        <header className="bg-white flex justify-between px-8 p-1">
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header