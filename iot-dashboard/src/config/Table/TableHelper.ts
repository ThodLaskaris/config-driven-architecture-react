import { GridColDef } from '@mui/x-data-grid';
import { Table } from '../../types/Table';
import { tableConfigs } from './TableConfig';
import { createCommand, createDevice, createManufacturer, deleteCommand, deleteDevice, deleteManufacturer, updateDevice } from '../../services';

export const paginationVars = [15, 25, 50, 75, 100];
export const initialPageSize = paginationVars[0] ?? 15;

export function makeColumnTitles<T>(fields: (keyof T)[]): Record<string, string> {
  return Object.fromEntries(fields.map(x => [String(x), String(x)]));
}

export function buildGridColumns(titles: Record<string, string>): GridColDef[] {
  return Object.entries(titles).map(([field, headerName]) => ({
    field,
    headerName,
    width: field === 'id' ? 300 : 120,
  }));
}

export function makeTableConfig(
  title: string,
  columns: Record<string, string>,
  endpoint: string,
  resource: string
): Table {
  return {
    title,
    columnsDef: buildGridColumns(columns),
    pageSizeOptions: [15, 25, 50, 75, 100],
    endpoint,
    resource
  };
}


export function getTableConfig(name: string): Table {
  const key = Object.keys(tableConfigs).find(
    k => k.toLowerCase() === (name ?? '').toLowerCase()
  );
  return tableConfigs[key ?? 'Devices'];
}

export const functionsMap: Record<string, {
  deactivate?: (id: any) => Promise<any>;
  add?: (data: any) => Promise<any>,
  delete?: (id: any) => Promise<any>;
  update?: (id: any, data: any) => Promise<any>;
}> = {
  commands: {
    add: createCommand,
    delete: deleteCommand,
  },
  devices: {
    add: createDevice,
    delete: deleteDevice,
    update: updateDevice,
  },
  manufacturers: {
    add: createManufacturer,
    delete: deleteManufacturer,
  }
};

