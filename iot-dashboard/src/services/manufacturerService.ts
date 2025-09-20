import * as api from './apiService'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function addManufacturer(data: any, token?: string) {
    return api.create<any>('manufacturers', data, token);
}
export function getAllManufacturers(token?: string) {
    return api.getAll('manufacturers', token);
}
export function getManufacturerById(identifier: string | number, token?: string) {
    return api.getById('manufacturers', identifier, token);
}
export function deleteManufacturer(identifier: string | number, token?: string) {
    return api.deleteById('manufacturers', identifier, token);
}