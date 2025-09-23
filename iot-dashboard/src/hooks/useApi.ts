import { useCallback, useEffect, useState } from 'react';
import { apiRequest } from '../services/apiHelpers';
import {  UseApiOptions } from "../types/ApiOptions";



export function useApi<T>(
  endpoint: string,
  options: UseApiOptions = {}
) {
  const {
    method = 'GET',
    data,
    token,
    params,
    dependencies = [endpoint, method, data, token, params]
  } = options;

  const [result, setResult] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    apiRequest<T>({ path: endpoint, method, data, token, params })
      .then(setResult)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, [endpoint, method, data, token, params]);

  useEffect(() => {
    fetchData();
  }, [...dependencies, fetchData]);

  return { result, loading, error, refetch: fetchData };
}