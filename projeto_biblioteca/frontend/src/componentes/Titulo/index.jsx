function Titulo({ children, className = "" }) {
    return (
        <h2
            className={`w-full py-[30px] bg-white text-center m-0 ${className}`}
        >
            {children}
        </h2>
    );
}

export default Titulo;