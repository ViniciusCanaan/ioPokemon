import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

export const getType = api.get('type');
export const getPokemon = api.get('pokemon/1');

const getContent = async () => {
    for (let index = 1; index <= 10; index++) {
        try {
            let reponse = await api.get(`${index}`)
            let pokemon = await reponse.json()
            console.log('Aqui' + JSON.stringify(pokemon));
        } catch (error) {
            // console.log(error)
        }
    }
}


export default api;