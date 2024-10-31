import axios from "axios";
import { MethodEnum } from "../../../enums/method.enum";

export type MethodType = 'get' | 'delete' | 'post' | 'put' | 'patch';


export class ConnectionApiDeprecated {
    static async call<T>(url: string, method: MethodType, body?: unknown): Promise<T> {
        switch (method) {
            case MethodEnum.DELETE:
            case MethodEnum.GET:
                return (await axios[method]<T>(url)).data;
            case MethodEnum.POST:
            case MethodEnum.PUT:
            case MethodEnum.PUT:
            case MethodEnum.PATCH:
            default:
                return (await axios[method]<T>(url, body)).data;
        }
    }
}