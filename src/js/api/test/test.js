import { IAxios } from "../../tools/axios";

const baseEndpoint = "Comunas/";

const llamadoApi = async () => {
    return await IAxios.get(baseEndpoint);;
}


export const Test = {
    llamadoApi
}
