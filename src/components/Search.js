import React, {useState} from "react";

import { TextInput, Image, View, Text, TouchableOpacity } from "react-native";
import colors from '../colors/colors.js';
import styled from "styled-components";

import IconProcurar from '../icons/procurar.png';
import IconHeart from '../icons/heart.png';
import IconHeartVoid from '../icons/heartVoid.png';



const Search = () => {

    const [heart, setHeart] = useState(false);  

    function HeartLike(){
        if(heart == true){
            setHeart(false)
        }else{
            setHeart(true);
        }
        
    }


    return (
        <View style={{flexDirection:'row', alignItems:'center', width:'80%', justifyContent:'space-around'}}>
        <ViewInput>
            <TextTitleInput>Buscar</TextTitleInput>
            <Input
                placeholder="Buscar pokemon"
                placeholderTextColor="#666666"
            />
            <TouchableOpacity>
                <Image style={{ width: 20, height: 20 }} source={IconProcurar} />
            </TouchableOpacity>
        </ViewInput>
        <TouchableOpacity onPress={HeartLike}>
            {heart ?
                <Image style={{ width: 20, height: 20 }} source={IconHeart} />
                :
                <Image style={{ width: 20, height: 20 }} source={IconHeartVoid} />             
            }   
            
        </TouchableOpacity>
        </View>

    );


}


const ViewInput = styled.View`
        width: 80%;
        height: 54px;
        border-width: 2px;
        border-radius: 8px;
        border-color: #EC0344;
        flex-direction: row;
        justify-content: center;
        align-items:center;
`;

const TextTitleInput = styled.Text`
    position: absolute;
    top: -10px;
    left: 10px;
    font-weight: bold;
    color: #EC0344
    background-color: #ffffff;
    padding-left: 45px;
`;

const Input = styled.TextInput`
    width: 80%;
    height:54px;
`;

export default Search;