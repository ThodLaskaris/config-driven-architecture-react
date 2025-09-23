import { makeColumnTitles, makeTableConfig } from './TableHelper'
import { Command, CommandOutcome } from '../../types/Command';
import { Device } from '../../types/Device';
import { Manufacturer } from '../../types/Manufacturer';
import { LastSeen } from '../../types/LastSeen'; 


export const commandsColumnTitles = makeColumnTitles<Command>([
  'id','createdAt','sent','completed','commandCode','commandParams','deviceId','deviceIdentifier','loraWanPort'
]);


export const deviceColumnTitles = makeColumnTitles<Device>([
  'id','name','euid','lat','lng','manufacturer', 'manufacturerId', 'manufacturerName', 'typeName','type','address',
  'client','serialNumber','createdAt','activatedAt','wattage','averageConsumption','notes','lastOnline','customParam1',
  'customParam2','customParam3','customParam4','customParam5'
]);

export const commandsOutcomeColumnTitles = makeColumnTitles<CommandOutcome>([
  'id', 'commandId', 'success', 'message', 'data', 'receivedAt'
]);

export const manufacturersColumnTitles = makeColumnTitles<Manufacturer>([
  'Id', 'Name', 'Country', 'CreatedAt', 'ValidUntil', 'Client'
]);

export const lastSeenColumnTitles = makeColumnTitles<LastSeen>([
  'deviceId','onlineAt','gatewayId','signalStrength','createdAt'
]);

