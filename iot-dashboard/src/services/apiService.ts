import { apiRequest } from "./apiHelpers";
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

//RESTFUL API functions

// export function getAll<T>(resource: string, token?: string) {
//     return apiRequest<T[]>(`${API_BASE_URL}/${resource}`, 'GET', undefined, token);
// }
// export function getById<T>(resource: string, id: string | number, token?: string){
//     return apiRequest<T>(`${API_BASE_URL}/${resource}/${id}`, 'GET', undefined, token);
// }
// export function create<T>(resource: string, data: T, token?: string) {
//     return apiRequest<T>(`${API_BASE_URL}/${resource}`, 'POST', data, token);
// }
// export function update<T>(resource: string, id: string | number, data: Partial<T>, token?: string) {
//     return apiRequest<T>(`${API_BASE_URL}/${resource}/${id}`, 'PUT', data, token);
// }
// export function deleteById(resource: string, id: string | number, token?: string) {
//     return apiRequest<void>(`${API_BASE_URL}/${resource}/${id}`, 'DELETE', undefined, token);
// }

export function getAll<T>(resource: string, token?: string) {
    return apiRequest<T[]>(`${resource.replace(/^\/+/, '')}`, 'GET', undefined, token);
}
export function getById<T>(resource: string, id: string | number, token?: string){
    return apiRequest<T[]>(`${resource.replace(/^\/+/, '')}?id=eq.${id}`, 'GET', undefined, token);
}
export function create<T>(resource: string, data: T, token?: string) {
    return apiRequest<T>(`${resource.replace(/^\/+/, '')}`, 'POST', data, token);
}
export function update<T>(resource: string, id: string | number, data: Partial<T>, token?: string) {
    return apiRequest<T>(`${resource.replace(/^\/+/, '')}?id=eq.${id}`, 'PATCH', data, token);
}
export function deleteById(resource: string, id: string | number, token?: string) {
    return apiRequest<void>(`${resource.replace(/^\/+/, '')}?id=eq.${id}`, 'DELETE', undefined, token);
}