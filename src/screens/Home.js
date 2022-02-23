import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { View, Text, Image, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import Search from '../components/Search';
import CardPokemon from '../components/CardPokemon';
import Statistics from './Statistics';
import api from '../services/api';



const Home = () => {

    const navigation = useNavigation();

    const [pokemon, setPokemon] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (searchText === '') {
            setPokemon(pokemon);
        } else {
            setPokemon(
                pokemon.filter((item) => {
                    if (item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
                        return true;
                    } else {
                        return false;
                    }
                })
            );
        }
    }, [searchText])

    useEffect(() => {
        async function requestPokemons() {
            const { data } = await api.get('/pokemon/?offset=0&limit=1000');
            console.log(data);
            setPokemon(data.results);
        }
        requestPokemons();
    }, [])


    const handleGoFavorits = () => {
        console.log('Cliquei');
        navigation.navigate('Favorits');
    }

    const handleGoStatistics = () =>{
        console.log('Cliquei');
        navigation.navigate('Statistics')
    }

    return (
        <>
            <Header />
            <Search titulo="Buscar" navegar={handleGoFavorits} valorBusca={searchText} salvamentoBusca={setSearchText} />
            <View style={{ width: '100%', paddingLeft: 15, paddingTop: 40, flexDirection: 'row', paddingRight: 15 }}>
                <FlatList style={{ flexDirection: 'row' }}
                    style={{ flex: 1 }}
                    data={pokemon}
                    renderItem={PokemonShow}
                    keyExtractor={(item) => item.name}
                    // contentContainerStyle={{ flexGrow: 1 }}
                    numColumns={3}
                />
            </View>
        </>
    );

    function PokemonShow(item) {
        const { name, url } = item.item

        const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

        const imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemonNumber + '.png'

        return (
            <>
                <TouchableOpacity onPress={handleGoStatistics}>
                    <CardPokemon nome={name} imagem={imageUrl}/>
                </TouchableOpacity>
            </>
        );

    }

}

export default Home;