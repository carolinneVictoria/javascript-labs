import api from "./api.js";

const ui = {
    async preencherFormulario(petId) {
        const pet = await api.buscarPetPorId(petId)
        document.getElementById("pet-id").value = pet.id
        document.getElementById("pet-especie").value = pet.especie
        document.getElementById("pet-nome").value = pet.nome
        document.getElementById("pet-raca").value = pet.raca
        document.getElementById("botao-cadastrar").textContent = "Salvar"
    },

    async renderizarPets() {
        const listaPets = document.getElementById('lista-pets')

        try {
            const pets = await api.buscarPets()
            pets.forEach(pet => ui.adicionarPetNaLista(pet))

        } catch (error) {
            alert('Erro ao tentar renderizar os pets! :( ')
            throw error
        }
    },

    adicionarPetNaLista(pet) {
        const listaPets = document.getElementById("lista-pets")
        const li = document.createElement("li")
        li.setAttribute("data-id", pet.id)
        li.classList.add("li-pet")

        const petEspecie = document.createElement("div")
        petEspecie.textContent = pet.especie
        petEspecie.classList.add("pet-especie")

        const petNome = document.createElement("div")
        petNome.textContent = pet.nome
        petNome.classList.add("pet-nome")

        const petRaca = document.createElement("div")
        petRaca.textContent = pet.raca
        petRaca.classList.add("pet-raca")

        const iconesContainer = document.createElement("div")
        iconesContainer.classList.add("icones")

        const botaoEditar = document.createElement("button")
        botaoEditar.classList.add("botao-editar")
        botaoEditar.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `
        botaoEditar.addEventListener("click", (e) => {
            e.stopPropagation()
            ui.preencherFormulario(pet.id)
        })

        const botaoExcluir = document.createElement("button")
        botaoExcluir.classList.add("botao-excluir")
        botaoExcluir.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14 11v6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `
        botaoExcluir.addEventListener("click", async (e) => {
            e.stopPropagation()
            if (confirm("Tem certeza que deseja excluir este pet?")) {
                try {
                    await api.excluirPet(pet.id)
                    li.remove()
                } catch (error) {
                    alert("Erro ao excluir pet!")
                }
            }
        })

        iconesContainer.appendChild(botaoEditar)
        iconesContainer.appendChild(botaoExcluir)

        li.appendChild(petEspecie)
        li.appendChild(petNome)
        li.appendChild(petRaca)
        li.appendChild(iconesContainer)
        listaPets.appendChild(li)
    },

    limparFormulario() {
        document.getElementById("cadastro-pet-form").reset();
        document.getElementById("pet-id").value = "";
        document.getElementById("botao-cadastrar").textContent = "Cadastrar"
    }
}
export default ui;