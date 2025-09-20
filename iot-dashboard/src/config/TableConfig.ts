import { GridColDef } from '@mui/x-data-grid';
import { deleteCommand, deleteDevice, deleteManufacturer } from '../services';
import { Command, CommandsOutcome } from '../types/command';
import { Table } from '../types/table';
import { Device } from '../types/device';
import { Manufacturer } from '../types/manufacturer';

export const paginationVars = [15, 25, 50, 75, 100];
export const initialPageSize = paginationVars[0] ?? 15;
export const column_width = 120;

export const commandsColumnTitles = makeColumnTitles<Command>([
  'ID', 'Sent', 'Completed', 'CommandCode', 'CommandParams',
  'DeviceId', 'LoraWanPort', 'ExecutedAt', 'CreatedAt', 'ValidUntil', 'Client'
]);

export const deviceColumnTitles = makeColumnTitles<Device>([
  'name', 'serial', 'euid', 'type', 'manufacturer', 'wattage', 'avg_cons', 'lat', 'lng', 'created_at', 'activated_at', 'last_online', 'id'
]);

export const commandsOutcomeColumnTitles = makeColumnTitles<CommandsOutcome>([
  'ID', 'Name', 'Type', 'Status', 'Last Seen', 'Location'
]);

export const manufacturersColumnTitles = makeColumnTitles<Manufacturer>([
  'Id', 'Name', 'Country', 'CreatedAt', 'ValidUntil', 'Client'
]);

export const devicesTableConfig: Table = {
  title: 'Devices',
  columnsDef: makeColumnsDef(deviceColumnTitles),
  pageSizeOptions: paginationVars,
  endpoint: '/devices',
  resource: 'devices'
};

export const commandsTableConfig: Table = {
  title: 'Commands',
  columnsDef: makeColumnsDef(commandsColumnTitles),
  pageSizeOptions: paginationVars,
  endpoint: '/commands',
  resource: 'commands'
};

export const manufacturersTableConfig: Table = {
  title: 'Manufacturers',
  columnsDef: makeColumnsDef(manufacturersColumnTitles),
  pageSizeOptions: paginationVars,
  endpoint: '/manufacturers',
  resource: 'manufacturers'
};

export const tableConfigs: Record<string, Table> = {
  Devices: devicesTableConfig,
  Commands: commandsTableConfig,
  Manufacturers: manufacturersTableConfig
};

export function getTableConfig(name: string): Table {
  const key = Object.keys(tableConfigs).find(
    k => k.toLowerCase() === (name ?? '').toLowerCase()
  );
  return tableConfigs[key ?? 'Devices'];
}

function makeColumnTitles<T>(fields: (keyof T)[]): Record<string, string> {
  return Object.fromEntries(fields.map(x => [String(x), String(x)]));
}

function makeColumnsDef(titles: Record<string, string>): GridColDef[] {
  return Object.entries(titles).map(([field, headerName]) => ({
    field,
    headerName,
    width: field === 'id' ? 60 : column_width,
  }));
}

export const functionsMap: Record<string, (id: any) => Promise<any>> = {
  commands: deleteCommand,
  devices: deleteDevice,
  manufacturers: deleteManufacturer
};