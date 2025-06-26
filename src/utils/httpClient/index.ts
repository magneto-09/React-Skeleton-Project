import axios, { type AxiosResponse } from "axios";

import { type CallApiParams } from "./interfaceHttpClient";

export const httpClient = {
  callAPI: async ({
    url,
    method = "GET",
    query,
    data,
    contentType = "application/json",
  }: CallApiParams): Promise<any> => {
    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL;

      const fullUrl = `${baseUrl}${url}`;
      console.log(fullUrl);

      const fetchedData: AxiosResponse = await axios({
        url: `${fullUrl}`,
        method,
        params: query,
        data: data,
        headers: {
          "Content-Type": contentType,
        },
        withCredentials: false, // when getting cookies (auth-cookie, etc.) from BE, keep it TRUE.
      });
      return fetchedData?.data;
    } catch (error) {
      console.log(error);
    }
  },
};
