import axios, { AxiosRequestConfig } from "axios";
import { MethodEnum } from "../../../enums/method.enum";


export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';

export default class ConnectionApi {
    static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
        const config: AxiosRequestConfig<unknown> = {
            method,
            url,
            ...(body ? { data: body } : {}) // Adiciona o corpo apenas se ele estiver definido
        };

        const response = await axios.request<T>(config);
        return response.data;

    }

    private static handleError(error: unknown): void {
        if (axios.isAxiosError(error)) {
            let errorMessage = `Erro na requisição: ${error.message}`;

            if (error.response) {
                // Trata erros com status 401 e 403
                switch (error.response.status) {
                    case 401:
                        errorMessage = "Erro 401: Não autorizado. Verifique suas credenciais.";
                        break;
                    case 403:
                        errorMessage = "Erro 403: Proibido. Você não tem permissão para acessar este recurso.";
                        break;
                    default:
                        errorMessage = `Dados da resposta: ${error.response.data}. Status da resposta: ${error.response.status}.`;
                        break;
                }
            } else if (error.request) {
                errorMessage = "Nenhuma resposta recebida.";
            } else {
                errorMessage = `Erro ao configurar a requisição: ${error.message}`;
            }

            throw new Error(errorMessage); // Lança o erro com a mensagem apropriada
        } else {
            throw new Error(`Erro inesperado: ${error}`); // Lança um erro inesperado
        }
    }

    static async connect<T, B = unknown>(url: string, method: MethodType, body?: B): Promise<T | null> {
        try {
            return await this.call<T>(url, method, body);
        } catch (error) {
            this.handleError(error); // Chama a função de tratamento de erros
            return null; // Retorna null em caso de erro
        }
    }

}

export const conectionAPIPost = async <T, B = unknown>(url: string, body?: B): Promise<T | null> => {
    return await ConnectionApi.connect<T, B>(url, MethodEnum.POST, body);
};

export const conectionAPIGet = async <T>(url: string): Promise<T | null> => {
    return await ConnectionApi.connect<T>(url, MethodEnum.GET);
};

export const conectionAPIDelete = async <T>(url: string): Promise<T | null> => {
    return await ConnectionApi.connect<T>(url, MethodEnum.DELETE);
};

export const conectionAPIPut = async <T, B = unknown>(url: string, body?: B): Promise<T | null> => {
    return await ConnectionApi.connect<T, B>(url, MethodEnum.PUT, body);
};

export const conectionAPIPatch = async <T, B = unknown>(url: string, body?: B): Promise<T | null> => {
    return await ConnectionApi.connect<T, B>(url, MethodEnum.PATCH, body);
};


