import { useState } from "react"
import { requestLogin } from "../types/requestLogin";
import { conectionAPIPost } from "../functions/connection/connectionApi";
import { ReturnLogin } from "../types/returnLogin";

import { useDispatch } from "react-redux";
import { setUserAction } from "../../store/reducers/userReducer";

export const useRequest = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');


    const authRequest = async (body: requestLogin) => {
        setLoading(true);

        await conectionAPIPost<ReturnLogin>('http://192.168.0.104:8080/auth', body)
            .then((result) => {
                if (result?.user) {
                    dispatch(setUserAction(result.user));
                }
            })
            .catch((error) => {
                console.error(error)
                setErrorMessage('Email ou senha inválidos.');
            });
        setLoading(false);
        console.log('clicou')
    }

    return {
        loading,
        errorMessage,
        authRequest,
        setErrorMessage,
    }

}