import { baseApiEnv } from "@/constant";
import axios from "axios";

const api = axios.create({
  baseURL: baseApiEnv,
  timeout: 20000,
});

export default api;
