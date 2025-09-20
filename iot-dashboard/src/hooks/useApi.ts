import { useEffect, useState } from 'react';
import { apiRequest } from '../services/apiHelpers';

export function useApi<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: any,
  token?: string,
  dependencies: any[] = [],
) {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  useEffect(() => {
    setLoading(true);
    setError(null);

    apiRequest<T>(endpoint, method, data, token)
      .then(setResult)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, dependencies.length ? dependencies : [endpoint, method, data, token]);

  return { result, loading, error };
}