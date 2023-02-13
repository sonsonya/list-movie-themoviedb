import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { List, Detail } from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={List} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router;