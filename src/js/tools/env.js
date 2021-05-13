import { envURLs } from "../config/environtments";


  const env = () => {
    if (process.env.REACT_APP_SUBENVIRONMENT === "production") {
      envURLs.bkndLocalhost = envURLs.bkndProduction;
    }
    if (process.env.REACT_APP_SUBENVIRONMENT === "qa") {
      envURLs.bkndLocalhost = envURLs.bkndQa;
    }
    let url, front;
    if (process.env.NODE_ENV === "production") {
      if (process.env.REACT_APP_ENVIRONMENT === "production") {
        url = envURLs.bkndProduction;
      } else if (process.env.REACT_APP_ENVIRONMENT === "qa") {
        url = envURLs.bkndQa;
      } else {
        url = envURLs.invalidEnvironment;
      }
    } else if (process.env.NODE_ENV === "development") {
      url = envURLs.bkndLocalhost;
    } else {
      url = envURLs.invalidEnvironment;
    }
    return { url, front };
  };
  
  //Corresponde a la url de la API (No incluye /api/)
  export const apiUrlEnv = () => env().url;
  