import { GridColDef } from "@mui/x-data-grid";
import { deleteCommand, deleteDevice, deleteManufacturer, addDevice, addManufacturer } from '../services';

export const paginationVars = [15, 25, 50, 75, 100];
export const initialPageSize = paginationVars[0] ?? 15;
export const column_width = 120;
export interface ITables {
    resource: any;
    title: string;
    columnsDef: GridColDef[]
    pageSizeOptions?: number[];
    endpoint: string;
}
export interface TablesProps extends ITables {
  rows: any[];
  onDelete?: () => void;
}

export const commandsTableConfig: ITables = {
  title: 'Commands',
  columnsDef: [
    { field: 'ID', headerName: 'ID', width: 60 },
    { field: 'Sent', headerName: 'Sent', width: column_width },
    { field: 'Completed', headerName: 'Completed', width: column_width },
    { field: 'CommandCode', headerName: 'CommandCode', width: column_width },
    { field: 'CommandParams', headerName: 'CommandParams', width: column_width },
    { field: 'DeviceId', headerName: 'DeviceId', width: column_width },
    { field: 'LoraWanPort', headerName: 'LoraWanPort', width: column_width },
    { field: 'ExecutedAt', headerName: 'ExecutedAt', width: column_width },
    { field: 'CreatedAt', headerName: 'CreatedAt', width: column_width },
    { field: 'ValidUntil', headerName: 'ValidUntil', width: column_width },
    { field: 'Client', headerName: 'Client', width: column_width },
  ],
  pageSizeOptions: paginationVars,
  endpoint: '/commands',
  resource: 'commands'
};

export const commandsOutcomeTableConfig: ITables = {
  title: 'Commands Outcome',
  columnsDef: [
    { field: 'ID', headerName: 'ID', width: 60 },
    { field: 'Name', headerName: 'Name', width: column_width },
    { field: 'Type', headerName: 'Type', width: column_width },
    { field: 'Status', headerName: 'Status', width: column_width },
    { field: 'Last Seen', headerName: 'Last Seen', width: column_width },
    { field: 'Location', headerName: 'Location', width: column_width },
  ],
  pageSizeOptions: paginationVars,
  endpoint: '/commandsOutcome',
  resource: 'commandsOutcome'
};

export const devicesTableConfig: ITables = {
  title: 'Devices',
  columnsDef: [
    { field: 'name', headerName: 'Name', width: column_width },
    { field: 'serial', headerName: 'Serial', width: column_width },
    { field: 'euid', headerName: 'EUID', width: column_width },
    { field: 'type', headerName: 'Type', width: column_width },
    { field: 'manufacturer', headerName: 'Manufacturer', width: column_width },
    { field: 'wattage', headerName: 'Wattage', width: column_width },
    { field: 'avg_cons', headerName: 'Avg. Cons.', width: column_width },
    { field: 'lat', headerName: 'Lat', width: column_width },
    { field: 'lng', headerName: 'Lng', width: column_width },
    { field: 'created_at', headerName: 'Created At', width: column_width },
    { field: 'activated_at', headerName: 'Activated At', width: column_width },
    { field: 'last_online', headerName: 'Last Online', width: column_width },
    { field: 'id', headerName: 'ID', width: 60 },
  ],
  pageSizeOptions: paginationVars,
  endpoint: '/devices',
  resource: 'devices'
};

export const manufacturersTableConfig: ITables = {
  title: 'Manufacturers',
  columnsDef: [
    { field: 'ID', headerName: 'Id', width: column_width },
    { field: 'Name', headerName: 'Name', width: column_width },
    { field: 'Country', headerName: 'Country', width: column_width },
    { field: 'CreatedAt', headerName: 'CreatedAt', width: column_width },
    { field: 'ValidUntil', headerName: 'ValidUntil', width: column_width },
    { field: 'Client', headerName: 'Client', width: column_width },
  ],
  pageSizeOptions: paginationVars,
  endpoint: '/manufacturers',
  resource: 'manufacturers'
};

export const tableConfigs: Record<string, ITables> = {
  Commands: commandsTableConfig,
  CommandsOutcome: commandsOutcomeTableConfig,
  Devices: devicesTableConfig,
  Manufacturers: manufacturersTableConfig
};

export function getTableConfig(name: string): ITables {
  const key = Object.keys(tableConfigs).find(
    k => k.toLowerCase() === (name ?? '').toLowerCase()
  );
  return tableConfigs[key ?? 'Devices'];
}
export const deleteMap: Record<string, (id: any) => Promise<any>> = {
  commands: deleteCommand,
  devices: deleteDevice,
  manufacturers: deleteManufacturer,
};

// export function getTableTitle(name: string): string {
//   return getTableConfig(name).title;
// }
// export function noVal(columnsDef: GridColDef[]): GridColDef[] {
//   return columnsDef.map(col => ({
//     ...col, renderCell: col.renderCell || ((params) => params.value ?? '-'),
//   }));
//}
