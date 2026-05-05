import api from "./api.js";

const ui = {
    async renderizarPets(){
        const listaPets = document.getElementById('lista-pets')
        try {
            const pets = await api.buscarPets()
            pets.forEach((pet => {
                listaPets.innerHTML += `
                    <li class="li-pet" data-id="${pet.id}">
                    <div class="pet-especie">${pet.especie}</div>
                    <div class="pet-nome">${pet.nome}</div>
                    <div class="pet-raca">${pet.raca}</div>
                    </li>
                `
            }))
        } catch (error) {
            alert('Erro ao tentar renderizar os pets! :( ')
        }
    }
}
export default ui;