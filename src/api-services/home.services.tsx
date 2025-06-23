import { httpClient } from "../utils/httpClient";

export const getAllUsers = () =>
  httpClient.callAPI({
    url: "/api/User/GetAllUsers",
    method: "GET",
  });
