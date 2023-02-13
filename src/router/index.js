import React from "react"
import { List, Detail } from '../pages';

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="List" component={List} options={{headerShown: false}}></Stack.Screen>
            <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default Router;