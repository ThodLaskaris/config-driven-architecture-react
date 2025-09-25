export interface Table {
  resource: any;
  title: string;
  columnsDef: Array<{ field: string; headerName: string; editable?: boolean }>;
  pageSizeOptions?: number[];
  endpoint: string;
  data?: any;
}

export interface TableProps extends Table {
  rows: any[];
  onDelete?: (row: any) => Promise<any>;
  refetch?: () => void;
  onUpdate?: (row: any) => Promise<any>;
}
export interface ServerPaginationProps extends TableProps {
  page: number;
  pageSize: number;
  rowCount: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  data?: any;
}
export interface TableToolbarProps {
  onAdd: () => void;
  onExport: () => void;
}