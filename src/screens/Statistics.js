import React, { useState } from "react";

import { View, Image, TouchableOpacity, Text } from 'react-native';
import styled from "styled-components";

import Pokeball from '../images/Pokeball.png';
import Bulbassauro from '../images/Bulba.png'

import IconHeartVoid from '../icons/heartVoid.png'
import IconHeart from '../icons/heart.png';
import Balanca from '../icons/balanca.png';
import Regua from '../icons/regua.png';
import { colors } from "../colors/colors";
import HeaderStatistics from "../components/HeaderStatistics";
import { useNavigation } from "@react-navigation/native";

const Statistics = () => {

    const [heart, setHeart] = useState(false);

    const navigation = useNavigation();

    function HeartLike() {
        if (heart == true) {
            setHeart(false)
        } else {
            setHeart(true);
        }

    }

    return (
        <Background>
            <HeaderStatistics />
            <View style={{ alignItems: 'flex-end' }}>
                <ImagemPokebola source={Pokeball} />
            </View>
            <ViewPokemon>
                <ImagemPokemon source={Bulbassauro} />
            </ViewPokemon>
            <ViewCardData>
                <ViewData>
                    <ViewLike>
                        <TouchableOpacity onPress={HeartLike}>
                            {heart ?
                                <Image style={{ width: 20, height: 20, marginRight: 18 }} source={IconHeart} />
                                :
                                <Image style={{ width: 20, height: 20, marginRight: 18 }} source={IconHeartVoid} />
                            }

                        </TouchableOpacity>
                    </ViewLike>
                    <ViewTypes>
                        <ViewDataTypes>
                            <TextType>Grass</TextType>
                        </ViewDataTypes>
                    </ViewTypes>
                    <ViewLifeStatistics>
                        <Image style={{ width: 16, height: 16, marginRight: 18 }} source={Balanca} />
                        <TextoLifeStatistics>6,9 kg</TextoLifeStatistics>
                        <Image style={{ width: 8, height: 16, marginRight: 18 }} source={Regua} />
                        <TextoLifeStatistics>0,7 m</TextoLifeStatistics>

                        <TextoLifeStatistics>Chlorophyll / Overgrow</TextoLifeStatistics>
                    </ViewLifeStatistics>

                    <ViewNameLifeStatistics>
                        <TextoNameLifeStatistics>Weigth</TextoNameLifeStatistics>
                        <TextoNameLifeStatistics>Height</TextoNameLifeStatistics>
                        <TextoNameLifeStatistics>Moves</TextoNameLifeStatistics>
                    </ViewNameLifeStatistics>

                    <ViewDescricaoPokemon>
                        <DescricaoPokemon>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</DescricaoPokemon>
                    </ViewDescricaoPokemon>
                    
                    <ViewBaseStats>
                        <Title>Base Stats</Title>
                        <TitleStats>HP</TitleStats>
                        <TitleStats>ATK</TitleStats>
                        <TitleStats>DEF</TitleStats>
                        <TitleStats>SATK</TitleStats>
                        <TitleStats>SDEF</TitleStats>
                        <TitleStats>SPD</TitleStats>
                    </ViewBaseStats>

                </ViewData>
                
            </ViewCardData>
        </Background>

    );

};


const Background = styled.View`
    flex: 1;
    background-color: #74CB48;
    
`;

const ImagemPokebola = styled.Image`
    margin-right: 42px;
    
`;

const ImagemPokemon = styled.Image`
    width: 200px;
    height:200px;
    top: -130px;
`;

const ViewPokemon = styled.View`
    align-items: center;
    z-index:3
`;

const ViewCardData = styled.View`
    align-items: center;
`;

const ViewData = styled.View`
    width: 95%;
    height:80%;
    top: -180px;
    background-color: #FFFFFF;
    border-radius: 15px;
    `;

const ViewLike = styled.View`
    align-items: flex-end;
    width: 100%;
    height: 10%;
    justify-content: center;
`;

const ViewTypes = styled.View`
    align-items: flex-start;
    padding-left: 40px;
    flex-direction: row;
    /* background-color: #131313; */
`;

const ViewDataTypes = styled.View`
    width: 58px;
    height: 20px;
    background-color: #74CB48;
    border-radius: 10px;
    justify-content:center
    align-items:center;
`;

const TextType = styled.Text`
    padding-right: 5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 12px;
    `;

const ViewLifeStatistics = styled.View`
    width: 100%;
    /* background-color: #131313; */
    height:20px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 40px;
`;

const TextoLifeStatistics = styled.Text`
    font-size:14px;
    color: #212121;
    margin-right: 15px;
    

`;

const ViewNameLifeStatistics = styled.View`
    width: 100%;
    /* background-color: #131313; */
    height:50px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    padding-left: 40px;
`;

const TextoNameLifeStatistics = styled.Text`
    font-size:14px;
    /* color: #212121; */
    margin-right: 15px;
`;

const ViewDescricaoPokemon = styled.View`
    justify-content: center;
    align-items: center;
    padding-left: 40px;
`;

const DescricaoPokemon = styled.Text`
    font-size: 14px;
    font-weight: 400;
    line-height:18px;
    color: #212121;
`;

const ViewBaseStats = styled.View`
    flex: 1;
    width:100%;
    height: 80%;
    justify-content: flex-start;
    /* background-color: #131313 */

`;

const Title = styled.Text`
    font-size: 18px;
    line-height: 16px;
    color: #74CB48;
    padding-left: 40px;
    padding-top: 40px;
    font-weight: bold;
`;

const TitleStats = styled.Text`
    font-size: 14px;
    color: ${colors.Grass};
    padding-left: 40px;
    padding-top: 7px;
    font-weight: 600;
`;

const NumberStats = styled.Text`
    font-size:12px;
    color: #212121;
    font-weight: 400;
`;
export default Statistics;