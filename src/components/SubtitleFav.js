import React from "react";
import styled from "styled-components";
import { colors } from "../colors/colors";

import heart from '../icons/heart.png';

const SubtitleFav = () => {
    return (
        <>
            <ViewSubtitle>
                <IconHeart source={heart}/>
                <TextSubtitle>Meus favoritos</TextSubtitle>
            </ViewSubtitle>
            {/* <ViewFavoritePoke/> */}
        </>
        
    );

}

const ViewSubtitle = styled.View`
    width: 100%;
    height: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

const TextSubtitle = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: ${colors.SecondaryColor}
`;

const IconHeart = styled.Image`
    width: 20px;
    height:20px;
    margin-right: 15px;
`;

const ViewFavoritePoke = styled.View`
    width: 100%;
    height: 100%;
    padding-left: 15px;
    padding-top: 40px;
    flex-direction: row; 
    padding-right: 15px;
    background-color: #212121
`;

export default SubtitleFav;