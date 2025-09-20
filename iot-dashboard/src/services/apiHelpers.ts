const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


/*
    Generic function to make API requests RESTFUL

export async function apiRequest<T>(
    url: string,
    method: string,
    data?: any,
    token?: string
): Promise<T> {
        console.log('API URL:', url); 
        console.log('API Link: ', API_BASE_URL);
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `${token}` } : {}),
        },
        ...(data ? { body: JSON.stringify(data) } : {}),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Request failed');
    }
    return await response.json();
}
*/
// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export async function apiRequest<T>(
    path: string,
    method: string,
    data?: any,
    token?: string
): Promise<T> {
    const url = `${API_BASE_URL}/${path.replace(/^\/+/, '')}`;
    console.log('API URL:', url);
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...(token ? { 'Authorization': `${token}` } : {}),
        },
        ...(data ? { body: JSON.stringify(data) } : {}),
    });
    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Request failed');
    }
    if (response.status === 204) {
        return null as T;
    }
    return await response.json();
}