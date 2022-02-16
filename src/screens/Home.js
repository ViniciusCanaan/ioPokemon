import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { View, Text, Image, Button, FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Search from '../components/Search';
import CardPokemon from '../components/CardPokemon';
import Statistics from './Statistics';
import api from '../services/api';



const Home = () => {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function requestPokemons() {
            const { data } = await api.get('/?offset=0&limit=1000');
            console.log(data);
            setPokemon(data.results);
        }
        requestPokemons();
        //AQUI
        //     fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1000', {
        //         method: 'GET',
        //         headers: {
        //             'Accept': 'application/json'
        //         }
        //     })
        //         .then(response => response.json())
        //         .then(data => {
        //             setPokemon(data.results)
        //         })
    }, [])


    return (
        <>
            <Header />
            <Search titulo="Buscar" />
            <View style={{ width: '100%', paddingLeft: 15, paddingTop: 40, flexDirection: 'row', paddingRight: 15 }}>
                <FlatList style={{ flexDirection: 'row' }}
                    style={{ flex: 1 }}
                    data={pokemon}
                    renderItem={({ item }) => (
                        <CardPokemon nome={item.name} />
                    )}
                    keyExtractor={(item) => item.name}
                    // contentContainerStyle={{ flexGrow: 1 }}
                    numColumns={3}
                />
            </View>
        </>
    );


    //     const[pokemon, setPokemon] = useState([])

    //     useEffect(()=>{
    //       fetch('https://pokeapi.co/api/v2/pokemon/',{
    //        method: 'GET',
    //        headers:{
    //            'Accept': 'application/json'
    //        } 
    //       })
    //       .then(response => response.json())
    //       .then(data => {
    //           setPokemon(data.results)
    //       })
    //     },[])

    //     // const getPokemon = async() =>{
    //     //     const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    //     //     console.log(data);
    //     //     setPokemon(data);
    //     // }

    //     return(
    //         <View>
    //            <FlatList
    //             data={pokemon}
    //             keyExtractor={(item)=> item.name}
    //             contentContainerStyle={{flexGrow : 1}}
    //             renderItem={PokemonShow}
    //            />
    //         </View>
    //     );
    // }

    // function PokemonShow(item) {

    //     const {name, url} = item.item
    //     const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
    //     const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+pokemonNumber+'.svg'

    //     console.log(pokemonNumber);
    //     console.log(imageUrl);

    //     return(
    //         <View>
    //             <Image style={{width:50, height:50}} source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'}}/>
    //             <Text>{name}</Text>
    //         </View>
    //     )
}

export default Home;