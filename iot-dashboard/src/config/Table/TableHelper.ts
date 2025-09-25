import { Table } from '../../types/table';
import { tableConfigs } from './TableConfig';
import { createCommand, deleteCommand } from '../../services/commandService';
import { createDevice, deleteDevice, updateDevice } from '../../services/deviceService';
import { createManufacturer, deleteManufacturer } from '../../services/manufacturerService';
export const paginationVars = [15, 25, 50, 75, 100];
export const initialPageSize = paginationVars[0] ?? 15;

export function makeColumnTitles<T>(fields: (keyof T)[]): Record<string, string> {
  return Object.fromEntries(fields.map(x => [String(x), String(x)]));
}

export function buildGridColumns(titles: Record<string, string>): Array<{ field: string; headerName: string; editable?: boolean }>{
  return Object.entries(titles).map(([field, headerName]) => ({
    field,
    headerName,
    editable: !['id', 'createdAt', 'activatedAt', 'updatedAt'].includes(field),
  }));
}

export function makeTableConfig(
  title: string,
  columns: Record<string, string>,
  endpoint: string,
  resource: string
): any {
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

