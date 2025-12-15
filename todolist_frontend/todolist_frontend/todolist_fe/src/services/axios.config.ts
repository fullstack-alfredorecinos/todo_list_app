import axios from "axios";
import { config } from "../config";

const API_URL = config.API_URL; //http://127.0.0.1:5500

export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 1000,
    headers: {
        "Content-Type": "application/json",
    },
});
