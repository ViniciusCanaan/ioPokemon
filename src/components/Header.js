import React, { useState } from "react";

import { View, Image, Switch } from 'react-native';

import { colors } from "../colors/colors";

import styled from "styled-components";

import Logo from '../icons/logo.png';

export const Header = () => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <>
            <Cabecalho />
            <DadosCabecalho>
                <Image source={Logo} />
                <TituloApp>ioasys pokédex</TituloApp>
                <ViewToggle>
                    <Switch
                        trackColor={{ false: "#FFFFFF", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#8D8B92"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </ViewToggle>
            </DadosCabecalho>
        </>
    );


}

const Cabecalho = styled.View`
    width:100%;
    height:17px;
    background-color: ${colors.SecondaryColor};
    `;

const DadosCabecalho = styled.View`
    width: 100%;
    height: 15%;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    `;

const TituloApp = styled.Text`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    color: ${colors.SecondaryColor};
`;

const ViewToggle = styled.View`
    width:39px;
    height:27px;
    border-radius: 40px;    
    justify-content: center;
    align-items:center;
    border-color: ${colors.SecondaryColor};
    border-width:1px;
`;


export default Header;