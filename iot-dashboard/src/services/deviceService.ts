import { Device } from '../types/Device';
import { apiOptions } from './apiHelpers';
import * as api from './apiService'

export function createDevice(device: Device, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.create<Device>('device', device, options);
}
export function updateDevice(identifier: string, data: Partial<Device>, options: Omit<apiOptions, 'path' | 'method'> ={}){
    return api.update<Device>('device', identifier, data, options);
}
export function getDevice(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Device>('device', identifier, options);
}
export function getDevices(options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Device>('device', options);
}
export function deleteDevice(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.deleteById('device', identifier, options);
}
