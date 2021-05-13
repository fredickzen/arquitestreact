
import axios from "axios";
import { openNotification } from "../../components/controls/notifications/Notifications";
import { AxiosFormDataHeaders, AxiosJsonHeaders, ApiBkndUrl } from "./api";

export const servercodeerrormessages = (status) => {
  switch (status) {
    case 403:
      openNotification(
        "e",
        "Sin autorización",
        "Usario intenta ingresar a un módulo sin autorización"
      );
      break;

    default:
      if (status >= 200 && status < 300) break;
      openNotification(
        "e",
        "Error interno",
        "Ha ocurrido un error interno no controlado"
      );
      break;
  }
};



export const IAxios = axios.create({
  baseURL: ApiBkndUrl,
  validateStatus: (status) => {
    servercodeerrormessages(status);
    return status >= 200 && status < 300;
  },
  ...AxiosJsonHeaders,
});

IAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (!error.response) {
      openNotification(
        "e",
        "Problemas de conexión",
        "No existe conexión con el servidor"
      );
    }

    return Promise.reject(error);
  }
);

export const IAxiosFileDownload = axios.create({
  baseURL: ApiBkndUrl,
  validateStatus: (status) => {
    servercodeerrormessages(status);
    return status >= 200 && status < 300;
  },
  ...AxiosJsonHeaders,
  responseType: "blob"
});

IAxiosFileDownload.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (!error.response) {
      openNotification(
        "e",
        "Problemas de conexión",
        "No existe conexión con el servidor"
      );
    }

    return Promise.reject(error);
  }
);

export const IAxiosFormData = axios.create({
  baseURL: ApiBkndUrl,
  ...AxiosFormDataHeaders,
  validateStatus: (status) => {
    servercodeerrormessages(status);
    return status >= 200 && status < 300;
  },
});

IAxiosFormData.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (!error.response) {
      openNotification(
        "e",
        "Problemas de conexión",
        "No existe conexión con el servidor"
      );
    }
    return Promise.reject(error);
  }
);