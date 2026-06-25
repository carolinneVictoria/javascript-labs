import logo from '../../imagens/logo.svg'

function Logo() {
    return (
        <div className="flex items-center text-3xl">
            <img
                className="mr-2.5"
                src={logo}
                alt="logo"
            />

            <p>
                <strong>Alura</strong>Books
            </p>
        </div>
    )
}

export default Logo