// import { ApiRequestDefault } from '~/types/api';
import { ApiRequestDefault } from "../types/api";

export default class ApiService implements ApiRequestDefault {
    _
    constructor() {
        this.apiUrl = import.meta.env.VITE_API_BASE_URL as string;
        this.tokenKey = this.getToken() || ''
    }

    async request(url, method = 'GET', data = null){
        // console.log(method, this.getHeaders(), this.apiUrl);
        const requestOptions = {
            method,
            headers: this.getHeaders(),
            body: data ? JSON.stringify(data) : null,
        };

        const response = await fetch(`${this.apiUrl}/${url}`, requestOptions)
        console.log(response);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

        return response.json();
    }

    getHeaders() {
        const headers = {
            'Content-Type': 'application/json',
        };
        const token = this.getToken();

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return headers;
    }

    getToken() {
        // Aqui você pode implementar a lógica para obter o token da store ou localStorage conforme necessário
        // Por exemplo, se você estiver usando a store Pinia:
        // import { useStore } from 'pinia';
        // const store = useStore();
        // return store.state.token;
        return localStorage.getItem(this.tokenKey);
    }
}
