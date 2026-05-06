const api = {

    async buscarPets(){
        try {
            const response = await fetch('http://localhost:3000/pets')
            return await response.json()

        } catch (error) {
            alert('Erro ao buscar dados! :( ')
            throw error
        }
    },

    async salvarPet(pet){
        try {
            const response = await fetch('http://localhost:3000/pets', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(pet)
        })
        return await response.json()
        } catch (error) {
            alert('Erro ao salvar novo pet! :( ')
            throw error;
        }
    }

}

export default api;