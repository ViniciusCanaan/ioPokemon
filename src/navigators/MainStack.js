import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Favorits from '../screens/Favorits';
import Statistics from '../screens/Statistics';

const MainStack = createStackNavigator();

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name="Home" component={Home}
                options={{
                    headerShown:false
                }}
            />
            <MainStack.Screen name="Favorits" component={Favorits}/>
            <MainStack.Screen name="Statistics" component={Statistics}
                 options={{
                    headerShown:false
                }}
            />
        </MainStack.Navigator>

    );

}
