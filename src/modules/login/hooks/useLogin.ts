
import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { conectionAPIPost } from "../../../shared/functions/connection/connectionApi";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleOnPress = async () => {
        setLoading(true);
        await conectionAPIPost('http://192.168.0.104:8080/auth', {
            email,
            password,
        }).catch(() => {
            setErrorMessage('Email ou senha inválidos.');
        });
        setLoading(false);
        console.log('clicou')
    }

    const handleOnchangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setEmail(event.nativeEvent.text);
    };

    const handleOnchangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setPassword(event.nativeEvent.text);
    };

    return {
        email,
        password,
        loading,
        errorMessage,
        handleOnPress,
        handleOnchangeEmail,
        handleOnchangePassword
    }
}