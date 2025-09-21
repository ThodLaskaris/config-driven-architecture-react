export interface Device {
  id?: string; 
  name?: string;
  euid: string;
  lat?: number;
  lng?: number;
  manufacturer?: string;
  manufacturerId?: string;
  manufacturerName?: string;
  typeName?: string;
  type: DeviceType; 
  address?: string;
  client?: string;
  serialNumber: string;
  createdAt?: string;
  activatedAt?: string;
  wattage?: number;
  averageConsumption?: number;
  notes?: string;
  lastOnline?: string;
  customParam1?: string;
  customParam2?: string;
  customParam3?: string;
  customParam4?: string;
  customParam5?: string;
  devices?: Device[]; 
}

export enum DeviceType {
  Unknown = 0,
  Gateway = 1,
  LightController = 2,
  PillarController = 3,
  ParkingSensor = 4
}