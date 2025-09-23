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
