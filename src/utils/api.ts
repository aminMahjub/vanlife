import axios from "axios";

const controller = new AbortController();

const api = axios.create({
  baseURL: "/api",
  method: "get",
  timeout: 1000,
  signal: controller.signal,
});

export default api;
