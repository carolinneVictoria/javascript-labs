import ui from "./ui.js";
import api from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPets()

    const botaoCancelar = document.getElementById("botao-cancelar")
    const formularioPet = document.getElementById("cadastro-pet-form")

    formularioPet.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", manipularCancelamento);

    function manipularCancelamento(){
        ui.limparFormulario();
    }
    function manipularSubmissaoFormulario(event){
        event.preventDefault();
        const especie = document.getElementById("pet-especie").value
        const nome    = document.getElementById("pet-nome").value
        const raca    = document.getElementById("pet-raca").value

        if (!nome || !especie || !raca) {
            alert('Preencha todos os campos!');
            return;
        }

        api.salvarPet({especie, nome, raca})
            .then(() => {
                ui.renderizarPets()
                ui.limparFormulario();
            })
            .catch(error => {
                alert('Erro ao salvar pet! :(')
            })
    }
})