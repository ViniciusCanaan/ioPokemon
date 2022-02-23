import React from "react";

import { View, Image,TouchableOpacity } from 'react-native';

import { colors } from "../colors/colors";

import styled from "styled-components";

import Voltar from '../icons/voltarbranco.png'
import { useNavigation } from "@react-navigation/native";

export const HeaderStatistics = () => {

    const navigation = useNavigation();

    return (
        <>
            <DadosCabecalho>
                <TouchableOpacity onPress={navigation.goBack}>
                <Image style={{ marginLeft: 40, marginRight: 16, width: 17, height: 17 }} source={Voltar} />
                </TouchableOpacity>
                <TituloApp>Nome Pokemon</TituloApp>
                <TituloId>001</TituloId>
            </DadosCabecalho>
        </>
    );


}

const DadosCabecalho = styled.View`
    width: 100%;
    height: 5%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    /* background-color: #131313; */
    margin-top: 16px;
    `;

const TituloApp = styled.Text`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.White};
`;

const TituloId = styled.Text`
    font-weight: 700;
    font-size: 12px;
    line-height: 32px;
    color: ${colors.White}
`;

export default HeaderStatistics;