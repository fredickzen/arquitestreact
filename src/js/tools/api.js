import helperSession from "../helpers/helpersSession";
import { apiUrlEnv } from "./env";

//** Conf **/

//Token
const sessionToken = helperSession.GetAccount("token");

//API URL
const baseURL = `${apiUrlEnv()}/api/`;
//TokenHeaders
const baseTokenHeaders = {
  Authorization: `Bearer ${sessionToken}`,
};

//#region "Fetch"

//AppJsonTokenHeaders
const baseFetchJsonTokenHeaders = {
  "Content-Type": "application/json",
  ...baseTokenHeaders,
};

//AppFormDataTokenHeaders
const baseFetchFormDataTokenHeaders = {
  ...baseTokenHeaders,
};

//#endregion "End fetch"

//#region AXIOS

//AxiosHeaderBase
//JSON
const baseAxiosJsonHeaders = {
  headers: {
    ...baseTokenHeaders,
  },
};
//FORMDATA
const baseAxiosFormDataHeaders = {
  headers: {
    ...baseTokenHeaders,
    "Content-Type": "multipart/form-data",
  },
};
//#endregion AXIOS

//** Exports variables **/
export const token = `Bearer ${sessionToken}`;
export const ApiBkndUrl = baseURL;

//Fetch Headers
export const FetchJsonTokenHeaders = baseFetchJsonTokenHeaders;
export const FetchFormDataTokenHeaders = baseFetchFormDataTokenHeaders;

//Axios Headers
export const AxiosJsonHeaders = baseAxiosJsonHeaders;
export const AxiosFormDataHeaders = baseAxiosFormDataHeaders;

//Only Token Header
export const TokenHeaders = baseTokenHeaders;

//** Exports Functions **/
export const getUrl = (inUrl) => `${baseURL}${inUrl}`;

export const InjectTokenHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

