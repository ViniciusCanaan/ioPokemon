import React, { useState, useEffect } from "react";

import { View, Text, FlatList } from "react-native";

import api from "../services/api";

import { getType, getPokemon } from "../services/api";




export const Teste = () => {

    const [pokemon, setPokemon] = useState([]);
    const [cor, setCor] = useState('#131313')


    useEffect(()=>{
        async function requestPokemon(){
            const {data} = await getPokemon;
            console.log(data.types);
            setPokemon(data.results);
        }
        requestPokemon();
    },[])

    // const getContent = async () => {
    //     for (let index = 1; index <= 2; index++) {
    //         try {
    //             let {reponse} = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    //             let pokemon = await reponse.json()
    //             console.log('Aqui' + JSON.stringify(pokemon));
    //             setPokemon(reponse.results)
    //             // showContent(pokemon)
    //         } catch (error) {
    //             // console.log(error)
    //         }
    //     }
    // }


    // useEffect(() => {
    //     async function requestType() {
    //         const { data } = await getType;
    //         console.log(JSON.stringify(data));
    //         setPokemon(data.results);
    //     }
    //     requestType();
    // }, [])

    

    return (
        

        <View>
            <FlatList
                data={pokemon}
                renderItem={({ item }) => (
                    <>
                        <Text style={{color:cor }}>{item.name}</Text>
                        <Text>{item.url}</Text>
                    </>
                )}
                keyExtractor={item => item.name}
            />
        </View>
    );
}