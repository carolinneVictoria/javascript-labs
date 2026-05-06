import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listaPets = document.getElementById('lista-pets')
        
        try{
            const pets = await api.buscarPets()
            pets.forEach(pet => ui.adicionarPetNaLista(pet))

        } catch (error) {
            alert('Erro ao tentar renderizar os pets! :( ')
        }
    },

    adicionarPetNaLista(pet){
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

        li.appendChild(petEspecie)
        li.appendChild(petNome)
        li.appendChild(petRaca)
        listaPets.appendChild(li)
    },

    limparFormulario(){
        document.getElementById("cadastro-pet-form").reset();
    }
}
export default ui;