export interface GenericModalProps {
    columns: Array<{ field: string; headerName: string; editable?: boolean }>;
    rowData: any;
    setRowData: (data: any) => void;
}

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}