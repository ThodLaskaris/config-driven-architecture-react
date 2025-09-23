import { apiOptions } from "../types/ApiOptions";
import {apiRequest } from "./apiHelpers";

export function getAll<T>(resource: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<T[]>({
        path: resource,
        method: 'GET',

        ...options
    });
}
export function getById<T>(resource: string, id: string | number, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<T>({
        path: `${resource}/${id}`,
        method: 'GET',
        ...options
    });
}
export function create<T>(resource: string, data: T, options: Omit<apiOptions, 'path' | 'method' | 'data'> = {}) {
    return apiRequest<T>({
        path: resource,
        method: 'POST',
        data,
        ...options
    });
}
export function update<T>(resource: string, id: string | number, data: Partial<T>, options: Omit<apiOptions, 'path' | 'method' | 'data'> = {}) {
    return apiRequest<T>({
        path: resource,
        method: 'PUT', 
        data,
        ...options
    });
}
export function deleteById(resource: string, id: string | number, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<void>({
        path: `${resource}/${id}`,
        method: 'DELETE',
        ...options
    });
}