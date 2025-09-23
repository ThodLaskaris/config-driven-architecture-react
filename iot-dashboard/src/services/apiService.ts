import { apiOptions, apiRequest } from "./apiHelpers";

export function getAll<T>(resource: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<T[]>({
        path: resource,
        method: 'GET',

        ...options
    });
}
export function getById<T>(resource: string, id: string | number, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<T>({
        // path: `${resource}/${id}`,
        path: resource,
        method: 'GET',
        params: { id: `eq.${id}` },
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
        params: { id: `eq.${id}` }, //Rest
        method: 'PATCH', // or 'PATCH' based on your API design
        data,
        ...options
    });
}
export function deleteById(resource: string, id: string | number, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return apiRequest<void>({
        // path: `${resource}/${id}`,
        path: resource,
        method: 'DELETE',
        params: { id: `eq.${id}` },
        ...options
    });
}