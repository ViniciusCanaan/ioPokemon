import React from "react";

import {View, Text} from 'react-native';
import CardPokemon from "./src/components/CardPokemon";
import Header from "./src/components/Header";
import Search from "./src/components/Search";
import Statistics from "./src/screens/Statistics";
import Home from "./src/screens/Home";


const App = () =>{
    return(
      // <View>
        // <Statistics/> 
        <Home/>
      // </View>
    );
}

export default App;