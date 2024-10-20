import React from "react";
import { Text, View } from "react-native"
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/Input/Input";

const Login = () => {
    return (
        <View>
            <ContainerLogin>
                <Text>testando</Text>
                <Input />
            </ContainerLogin>
        </View>
    );
};

export default Login;