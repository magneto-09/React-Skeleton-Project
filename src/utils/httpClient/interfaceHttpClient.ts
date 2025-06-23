export type ApiMethods = "GET" | "POST" | "PATCH" | "PUT" | "DELETE";

export interface CallApiParams {
  url: string;
  method?: ApiMethods;
  query?: object; // query-params
  data?: object; // payload
  contentType?: string; // for future use - if needed to configure the content-type in axios
}
