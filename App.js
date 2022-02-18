import React from "react";

import {View, Text} from 'react-native';
import CardPokemon from "./src/components/CardPokemon";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Statistics from "./src/screens/Statistics";
import Home from "./src/screens/Home";
import Favorits from "./src/screens/Favorits";

import MainStack from "./src/navigators/MainStack";

import { NavigationContainer } from '@react-navigation/native';


const App = () =>{
    return(
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
      // <View>
        // <Statistics/> 
      //  <Favorits/>
      // <Home/>
      // </View>
    );
}

export default App;