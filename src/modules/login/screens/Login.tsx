import React from "react";
import { View } from "react-native"
import { ContainerLogin, ImageLogo } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";

import logo from '../../../assets/images/logo.png';



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }
    return (
        <View>

            <ContainerLogin>

                <ImageLogo resizeMode="contain" source={logo} />

                <Input
                    margin="0px 0px 16px 0px"
                    title="Email:"
                    placeholder="Digite seu email" />

                <Input
                    title="Senha:"
                    placeholder="Digite sua senha"
                    secureTextEntry />
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