import axios from "axios";
import { IUser } from "@/Interfaces/IUser";

const BASE_URL = "http://localhost:9000/api/dev";
const axiosInstance = axios.create({ baseURL: BASE_URL });

interface ApiResponse<T> {
    code: number;
    status: string;
    message: string;
    data: T;
}

export const getUsers = async (): Promise<IUser[]> => {
    try {
        const response = await axiosInstance.get<ApiResponse<IUser[]>>("users");
        const users = response.data.data;

        if (!Array.isArray(users)) {
            throw new Error("Data is not an array");
        }

        return users;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return []; // Return empty array if 404 status
        } else {
            throw error;
        }
    }
}

// delete user 
export const deleteUser =  async (id:number) => {
    const response = await axiosInstance.delete<ApiResponse<null>>(`users/${id}`);
    return response.data;
}

// create user 
export const createUser = async (user: IUser) => {
    return (await axiosInstance.post<IUser>("users", user)).data;};