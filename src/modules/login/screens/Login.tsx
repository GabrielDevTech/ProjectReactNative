import React from "react";
import { Text, View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/button/Button";

const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }
    return (
        <View>
            <ContainerLogin>
                <Text>testando</Text>
                <Input />
                <Button margin='8px' onPress={handleOnPress} title="ENTRAR" />
            </ContainerLogin>
        </View>
    );
};

export default Login;