import React from "react";

import Bulbasaur from '../images/Bulbasaur.png'

import { View, Text, Image } from 'react-native';
import styled from "styled-components";

const CardPokemon = () => {
    return (
        <Card>
            <ViewIdPokemon>
                <TextId>001</TextId>
            </ViewIdPokemon>
            <ViewImagePokemon>
                <Image source={Bulbasaur} />
            </ViewImagePokemon>
            <ViewNomePokemon>
                <NomePokemon>Nome</NomePokemon>
            </ViewNomePokemon>
        </Card>
    );
}

const Card = styled.View`
    width: 104px;
    height: 112px;
    border-radius: 8px;
    border-color: #050;
    border-width: 1px;
    margin-right: 18px;

`;

const ViewIdPokemon = styled.View`
    width: 88px;
    height: 12px;
    margin-top:4px;
    margin-right: 8px;
    margin-left: 8px;
    justify-content: flex-end;
    align-items: flex-end;
`

const TextId = styled.Text`
    font-size: 12px;
    color: #131313
`;

const ViewImagePokemon = styled.View`
    justify-content: center;
    align-items: center;
`;

const ImagePokemon = styled.Image`
    width: 100%,
    height: 100%,
    resize: 'contain';
`;

const ViewNomePokemon = styled.View`
    background-color: #050;
    width: 100%;
    height:24px;
    justify-content: center;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    align-items: center;
`;

const NomePokemon = styled.Text`
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    color: #FFFFFF
`;

export default CardPokemon;