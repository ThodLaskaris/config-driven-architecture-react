import { useCallback, useEffect, useState } from 'react';
import { apiRequest } from '../services/apiHelpers';

export function useApi<T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  data?: any,
  token?: string,
  dependencies: any[] = [],
) {
  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    apiRequest<T>({ path: endpoint, method, data, token })
      .then(setResult)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));

  }, [endpoint, method, data, token]);

  useEffect(() => {
    fetchData();
  }, dependencies.length ? dependencies : [fetchData]);

  return { result, loading, error, refetch: fetchData };
}