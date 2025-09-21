import { GridColDef } from "@mui/x-data-grid";

export interface Table {
  resource: any;
  title: string;
  columnsDef: GridColDef[];
  pageSizeOptions?: number[];
  endpoint: string;
}

export interface TableProps extends Table {
  rows: any[];
  onDelete?: () => void;
  refetch?: () => void;
}