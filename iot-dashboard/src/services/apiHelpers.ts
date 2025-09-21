const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function keysToCamelCase<T>(obj: any): T {
  if (Array.isArray(obj)) {
    return obj.map(keysToCamelCase) as any;
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj).map(([k, v]) => [
        k.charAt(0).toLowerCase() + k.slice(1),
        keysToCamelCase(v)
      ])
    ) as T;
  }
  return obj;
}

export type apiOptions<T = any> = {
    path: string;
    method: string;
    data?: T | Partial<T>;
    params?: Record<string, any>;
    token?: string;
} 

export async function apiRequest<T>({
    path,
    method,
    data,
    params,
    token
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
    const json = await response.json();
    return keysToCamelCase<T>(json);
}