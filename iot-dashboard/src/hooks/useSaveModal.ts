import { useState } from "react";

export function useSaveModal<T>(
    updateFunction: (row: T) => Promise<any>,
    onSuccess?: () => void
) {
    const [save, setSave] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSave = async (row: T) => {
        setSave(true);
        setError(null);
        try {
           await updateFunction(row);
            onSuccess?.();
        } catch (error: any) {
            setError(error.message || 'Save failed');
        }finally {
            setSave(false);
        }
    };
    return { handleSave, save, error };
}