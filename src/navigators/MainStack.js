import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Favorits from '../screens/Favorits';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home}/>
            <MainStack.Screen name="Favorits" component={Favorits}/>
        </MainStack.Navigator>

    );

}
