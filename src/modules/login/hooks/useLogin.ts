

import { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useRequest } from "../../../shared/hooks/useRequest";

export const useLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { authRequest, errorMessage, loading, setErrorMessage } = useRequest();


    const handleOnPress = async () => {
        await authRequest({ email, password });
        console.log('clicou');
    }

    const handleOnchangeEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
        setEmail(event.nativeEvent.text);
    };

    const handleOnchangePassword = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setErrorMessage('');
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