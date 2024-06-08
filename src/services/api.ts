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
    const response = await axiosInstance.get<ApiResponse<IUser[]>>("users");
    const users = response.data.data; // Akses data dari respons

    // Pastikan bahwa users adalah array
    if (!Array.isArray(users)) {
        throw new Error("bukan array blok");
    }

    return users;
}


