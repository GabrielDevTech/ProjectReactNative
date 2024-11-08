import { useState } from "react"
import { requestLogin } from "../types/requestLogin";
import { conectionAPIPost } from "../functions/connection/connectionApi";
import { ReturnLogin } from "../types/returnLogin";
import { useUserReducer } from "../../store/reducers/userReducer/useUserReducer";
import { useGlobalReducer } from "../../store/reducers/globalReducer/useGlobalReducer";
import { NavigationProp, ParamListBase, useNavigation } from "@react-navigation/native";
import { menuUrl } from "../enums/menuUrl.enum";

export const useRequest = () => {
    const navigation = useNavigation<NavigationProp<ParamListBase>>();
    const { setModal } = useGlobalReducer();
    const { setUser } = useUserReducer();
    const [loading, setLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>('');


    const authRequest = async (body: requestLogin) => {
        setLoading(true);

        await conectionAPIPost<ReturnLogin>('http://192.168.0.104:8080/auth', body)
            .then((result) => {
                if (result?.user) {
                    setUser(result.user);
                    navigation.reset({
                        index: 0,
                        routes: [{ name: menuUrl.HOME }]
                    });
                }

            })
            .catch((error) => {
                console.log(error)
                setModal({
                    visible: true,
                    title: 'Erro',
                    text: 'Email ou senha invalídos.',
                });
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