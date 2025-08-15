import { Email, Password } from '@mui/icons-material';
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getEvents = async (limit, ofsset) => {
    try {

        const response = await apiClient.get(`/events/get?limit=${limit}&offset=${ofsset}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        throw error;
    }
};

export const login = async (infos) => {
    try {

        const response = await apiClient.post(`/auth/login`, infos);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        throw error;
    }
};

export const placeOrder = async (infos, token) => {
    try {

        const response = await apiClient.post(
            "/order/save",
            infos,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        return response.data;
    } catch (error) {
        console.error("Erro ao enviar pedido:", error);
        throw error;
    }
};