import React from "react";

import Bulbasaur from '../images/Bulbasaur.png'

import { colors } from "../colors/colors";

import { View, Text, Image } from 'react-native';
import styled from "styled-components";

const CardPokemon = ({id, nome, imagem}) => {

    const Normal = colors.Normal;
    const Fighting = colors.Fighting;
    const Flying = colors.Flying;
    const Ground = colors.Ground;
    const Poison = colors.Poison;
    const Rock = colors.Rock;
    const Bug = colors.Bug;
    const Ghost = colors.Ghost;
    const Steel = colors.Steel;
    const Fire = colors.Fire;
    const Water = colors.Water;
    const Grass = colors.Grass;
    const Eletric = colors.Eletric;
    const Psychic = colors.Psychic;
    const Ice = colors.Ice;
    const Dragon = colors.Dragon;
    const Dark = colors.Dark;
    const Fairy = colors.Fairy;

    return (
        <Card>
            <ViewIdPokemon>
                <TextId>{id}</TextId>
            </ViewIdPokemon>
            <ViewImagePokemon>
                <Image source={Bulbasaur} />
            </ViewImagePokemon>
            <ViewNomePokemon>
                <NomePokemon>{nome}</NomePokemon>
            </ViewNomePokemon>
        </Card>
        
    );
}

const Card = styled.View`
    width: 104px;
    height: 112px;
    border-radius: 8px;
    border-color: #74CB48;
    border-width: 1px;
    margin-right: 18px;
    margin-bottom: 18px;

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
    background-color: #74CB48;
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
    color: ${colors.White}
`;

export default CardPokemon;