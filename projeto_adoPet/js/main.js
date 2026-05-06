import api from "./api.js";
import ui from "./ui.js";

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPets()

    const botaoCancelar = document.getElementById("botao-cancelar")
    const formularioPet = document.getElementById("cadastro-pet-form")

    formularioPet.addEventListener("submit", manipularSubmissaoFormulario)
    botaoCancelar.addEventListener("click", manipularCancelamento);

    function manipularCancelamento() {
        ui.limparFormulario();
    }
    async function manipularSubmissaoFormulario(event) {
        event.preventDefault();
        const id = document.getElementById("pet-id").value
        const especie = document.getElementById("pet-especie").value
        const nome = document.getElementById("pet-nome").value
        const raca = document.getElementById("pet-raca").value

        if (!nome || !especie || !raca) {
            alert('Preencha todos os campos!');
            return;
        }

        try {
            if (id) {
                await api.editarPet({ id, nome, especie, raca });
            } else {
                await api.salvarPet({ nome, especie, raca });
            }
            ui.renderizarPets();
            ui.limparFormulario();
        } catch (error) {
            console.error("Erro ao salvar pet:", error);
            alert("Erro ao salvar pet. Tente novamente mais tarde.");
        }
    }
})