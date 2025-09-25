import { useState } from "react";
export type ModalMode = 'add' | 'edit' | null;

export function useModal<T = any>() {
    const [modalMode, setModalMode] = useState<ModalMode>(null);
    const [rowData, setRowData] = useState<T>({} as T);

    const openAdd = () => {
        setModalMode('add');
        setRowData({} as T);
    };

    const openEdit = (row: T) => {
        setModalMode('edit');
        setRowData(row);
    };

    const closeModal = () => {
        setModalMode(null);
        setRowData({} as T);
    };

    return { modalMode, rowData, setRowData, openAdd, openEdit, closeModal };
}

/*
ftiakso to modal API epikoininies , οπως και το UI

*/