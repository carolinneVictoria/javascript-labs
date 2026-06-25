import styled from "styled-components"
import Titulo from "../Titulo"

const Botao = styled.button`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

    &:hover {
        cursor: pointer;
    }
`

const Descricao = styled.p`
    max-width: 300px;
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <div className="items-center bg-white rounded-xl flex m-auto max-w-xl py-[25px] px-5 justify-around w-full shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div>
                <Titulo className="text-[16px] text-[#EB9B00] text-left">{titulo}</Titulo>
                <h2 className="text-[#002f52] text-[18px] font-bold my-[15px]">{subtitulo}</h2>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <img className="w-[150px]" src={img} alt="src"/>
                <button className="bg-[#EB9B00] text-white py-[10px] text-base border-none font-bold block text-center w-[150px] h-[40px] cursor-pointer">
                    Saiba mais
                </button>
            </div>
        </div>
    )
}

export default CardRecomenda