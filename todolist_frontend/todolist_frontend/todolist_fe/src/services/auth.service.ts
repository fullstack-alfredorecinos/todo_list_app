import type { LoginRequest, LoginResponse } from "../interfaces/auth.interface.ts";
import { axiosInstance } from "./axios.config.ts";

/*
Login
LogOut
createUser
updateUser
deleteUser */

const authService = {
    login: async (credentials: LoginRequest): Promise<LoginResponse> => {
        const response = await axiosInstance.post("/user/login", credentials);
        return response.data;
    },
    logout: async () => {

    },
    createUser: async () => {

    },
    updateUser: async () => {

    },
    deleteUser: async () => {

    },
}

export default authService;
