import { Device } from '../types/device';
import { apiOptions } from "../types/ApiOptions";
import * as api from './apiService'

export function createDevice(device: Device, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.create<Device>('Device', device, options);
}
export function updateDevice(identifier: string, data: Partial<Device>, options: Omit<apiOptions, 'path' | 'method'> ={}){
    return api.update<Device>('Device', identifier, data, options);
}
export function getDevice(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Device>('Device', identifier, options);
}
export function getDevices(options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Device>('Device', options);
}
export function deleteDevice(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.deleteById('Device', identifier, options);
}
