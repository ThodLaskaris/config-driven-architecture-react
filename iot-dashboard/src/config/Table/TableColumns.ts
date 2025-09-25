import { makeColumnTitles, makeTableConfig } from './TableHelper'
import { Command, CommandOutcome } from '../../types/command';
import { Device } from '../../types/device';
import { Manufacturer } from '../../types/manufacturer';
import { LastSeen } from '../../types/LastSeen'; 


export const commandsColumnTitles = makeColumnTitles<Command>([
  'id','createdAt','sent','completed','commandCode','commandParams','deviceId','deviceIdentifier','loraWanPort'
]);


export const deviceColumnTitles = makeColumnTitles<Device>([
  'id','name','euid','lat','lng', 'manufacturerId', 'type','address',
  'serialNumber','createdAt','wattage','activatedAt','notes','customParam1',
  'customParam2','customParam3','customParam4','customParam5', 'createdAt','client'
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
