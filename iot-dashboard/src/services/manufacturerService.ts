import { Manufacturer } from '../types/manufacturer';
import { apiOptions } from "../types/ApiOptions";
import * as api from './apiService'

export function getManufacturers(options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Manufacturer>('manufacturer', options)
}
export function getManufacturerById(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Manufacturer>('manufacturer', identifier, options);
}
export function createManufacturer(manufacturer: Manufacturer, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.create<Manufacturer>('manufacturer', manufacturer, options)
}
export function deleteManufacturer(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.deleteById('manufacturer', identifier, options);
}