import React from "react";
import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";




const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }
    return (
        <View>
            <ContainerLogin>
                <Input
                    title="Email:"
                    placeholder="Digite seu email" />
                <Button
                    type={theme.buttons.buttonsTheme.primary}
                    margin='8px'
                    onPress={handleOnPress}
                    title="Entrar" />
            </ContainerLogin>
        </View>
    );
};

export default Login;