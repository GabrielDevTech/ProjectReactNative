import React from "react";
import { View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";
import Button from "../../../shared/components/button/Button";
import Text from "../../../shared/components/text/Text";
import { textTypes } from "../../../shared/components/text/textTypes";



const Login = () => {

    const handleOnPress = () => {
        console.log('clicou')
    }
    return (
        <View>
            <ContainerLogin>
                <Text color='blue' type={textTypes.TITLE}>testando</Text>
                <Input />
                <Button margin='8px' onPress={handleOnPress} title="Entrar" />
            </ContainerLogin>
        </View>
    );
};

export default Login;