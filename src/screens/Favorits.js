import React from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components";

import Voltar from '../icons/BackButton.png';

import Header from "../components/Header";
import Search from "../components/Search";
import SubtitleFav from "../components/SubtitleFav";
import { useNavigation } from "@react-navigation/native";
import CardPokemon from "../components/CardPokemon";


const Favorits = () => {

    const navigation = useNavigation();

    return (
        <>
            <Header />
            <SubtitleFav />
            <CardPokemon/>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <ArrowBack>
                    <TouchableOpacity onPress={navigation.goBack} >
                        <Icon source={Voltar}/>
                    </TouchableOpacity>
                    <Texto>Voltar</Texto>
                </ArrowBack>
            </View>
        </>
    );

}


const ArrowBack = styled.View`
    width: 100%;
    height: 20%;
    /* background-color: #131313 */
    justify-content: center;
    align-items: center;
`;

const Icon = styled.Image`

`;

const Texto = styled.Text`
    font-size: 13px;
    font-weight: 400;
    color: #B2B2B2;
    line-height:20px;
    margin-top: 5px;
`;

export default Favorits;