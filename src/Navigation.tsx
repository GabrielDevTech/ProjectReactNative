import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './modules/home';
import Login from './modules/login';
import React from "react";
import { menuUrl } from "./shared/enums/menuUrl.enum";


const Stack = createNativeStackNavigator();
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" >
                <Stack.Screen name={menuUrl.LOGIN} component={Login} options={{ headerShown: false }} />
                <Stack.Screen
                    name={menuUrl.HOME}
                    component={Home}
                    options={{ title: 'Home' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;