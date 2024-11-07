import { ContainerLogin, ImageLogo } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/button/Button";
import { theme } from "../../../shared/themes/theme";

import logo from '../../../assets/images/logo.png';

import { useLogin } from "../hooks/useLogin";
import React from "react";
import { View } from "react-native";



const Login = () => {
    console.log("Login component rendered");
    const {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword
    } = useLogin();
    return (
        <View>
            <ContainerLogin>

                <ImageLogo resizeMode="contain" source={logo} />

                <Input
                    value={email}
                    errorMessage={errorMessage}
                    onChange={handleOnchangeEmail}
                    margin="0px 0px 16px 0px"
                    title="Email:"
                    placeholder="Digite seu email" />

                <Input
                    value={password}
                    onChange={handleOnchangePassword}
                    title="Senha:"
                    placeholder="Digite sua senha"
                    errorMessage={errorMessage}
                    secureTextEntry />
                <Button
                    loading={loading}
                    type={theme.buttons.buttonsTheme.primary}
                    margin='8px'
                    onPress={handleOnPress}
                    title="Entrar" />
            </ContainerLogin>
        </View>
    );
};

export default Login;