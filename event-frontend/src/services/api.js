import axios from 'axios';
console.log("asdasdasd",process.env.API_URL)
const apiClient = axios.create({
    baseURL: process.env.API_URL || "http://localhost:3000",
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getEvents = async (limit, ofsset) => {
    try {
        console.log(`/events/get?limit=${limit}&offset=${ofsset}`)
        const response = await apiClient.get(`/events/get?limit=${limit}&offset=${ofsset}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        throw error;
    }
};