import { Table } from "../../types/Table"
import { commandsColumnTitles, manufacturersColumnTitles, lastSeenColumnTitles, commandsOutcomeColumnTitles, deviceColumnTitles } from './TableColumns';
import { makeTableConfig } from "./TableHelper"

export const commandsTableConfig = makeTableConfig(
  'Commands',
  commandsColumnTitles,
  '/commands',
  'command'
)
export const devicesTableConfig = makeTableConfig(
  'Devices',
  deviceColumnTitles,
  '/devices',
  'device'
)
export const manufacturersTableConfig = makeTableConfig(
  'Manufacturers',
  manufacturersColumnTitles,
  '/manufacturers',
  'manufacturer'
)
export const lastSeenTableConfig = makeTableConfig(
  'Last Seen Devices',
  lastSeenColumnTitles,
  '/last-seen',
  'lastSeen'
)
export const commandsOutcomeTableConfig = makeTableConfig(
    'Command Outcomes',
    commandsOutcomeColumnTitles,
    '/command-outcome',
    'commandOutcome'
)
export const tableConfigs: Record<string, Table> = {
  Devices: devicesTableConfig,
  Commands: commandsTableConfig,
  Manufacturers: manufacturersTableConfig,
  LastSeen: lastSeenTableConfig,
  CommandOutcome: commandsOutcomeTableConfig
};
