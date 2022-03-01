import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Favorits from '../screens/Favorits';
import Statistics from '../screens/Statistics';
import { Teste } from '../screens/Teste';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home}
                options={{
                    headerShown:false
                }}
            />
            <MainStack.Screen name="Favorits" component={Favorits}
                options={{
                    headerShown:false
                }}
            />
            <MainStack.Screen name="Statistics" component={Statistics}
                 options={{
                    headerShown:false
                }}
            />
        </MainStack.Navigator>

    );

}
