import React from "react";

import {View, Text} from 'react-native';
import CardPokemon from "./src/components/CardPokemon";
import Header from "./src/components/Header";
import Search from "./src/components/Search";


const App = () =>{
    return(
      <View>
        <Header/>
        <Search/>
        <CardPokemon/>
        {/* <Search /> */}
      </View>
    );
}

export default App;