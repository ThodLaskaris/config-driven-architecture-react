export type UseApiOptions = {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  token?: string;
  params?: Record<string, any>;
  dependencies?: any[];
};

export type apiOptions<T = any> = {
    path: string;
    method: string;
    data?: T | Partial<T>;
    params?: Record<string, any>;
    token?: string;
} 
