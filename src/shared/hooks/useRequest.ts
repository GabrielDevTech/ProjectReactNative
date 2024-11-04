import { useState } from "react"
import { requestLogin } from "../types/requestLogin";
import { conectionAPIPost } from "../functions/connection/connectionApi";
import { ReturnLogin } from "../types/returnLogin";
import { userType } from "../types/userType";

export const useRequest = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [user, setUser] = useState<userType>();
    const authRequest = async (body: requestLogin) => {
        setLoading(true);

        await conectionAPIPost<ReturnLogin>('http://192.168.0.104:8080/auth', body)
            .then((result) => {
                setUser(result?.user)
            })
            .catch((error) => {
                console.error(error)
                setErrorMessage('Email ou senha inválidos.');
            });
        setLoading(false);
        console.log('clicou')
    }

    return {
        setErrorMessage,
        user,
        errorMessage,
        loading,
        authRequest,
    }

}