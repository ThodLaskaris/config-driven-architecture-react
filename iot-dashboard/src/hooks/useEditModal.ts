import { useState } from "react";

export function useModal<T = any>() {
    const [open, setOpen] = useState(false);
    const [editRow, setEditRow] = useState<T | null>(null);

    const handleEdit = (row: T) => {
        setEditRow(row);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    
    return { open, editRow, handleEdit, handleClose, setEditRow };
}