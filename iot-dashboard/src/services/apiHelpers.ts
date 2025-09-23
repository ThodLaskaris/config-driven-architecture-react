import { keysToCamelCase } from "../config/ApiConfig";
import { apiOptions } from "../types/ApiOptions";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN;


export async function apiRequest<T>({path,method,data,params
}: apiOptions<T>): Promise<T> {

    let url = `${API_BASE_URL}/${path.replace(/^\/+/, '')}`;
    if (params && Object.keys(params).length > 0) {
        const query = new URLSearchParams(params).toString();
        url += `?${query}`;
    }

    console.log('API URL:', url);
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_TOKEN ?? '',
        },
        ...(data ? { body: JSON.stringify(data) } : {}),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error || 'Request failed');
    }
    if (response.status === 204) {
        return null as T;
    }
    const json = await response.json();
    return keysToCamelCase<T>(json);
}


