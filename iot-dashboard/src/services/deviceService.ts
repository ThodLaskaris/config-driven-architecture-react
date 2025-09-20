import * as api from './apiService'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function addDevice(data: any, token?: string) {
    return api.create<any>('devices', data, token);
}
export function updateDevice(identifier: string, deviceData: any, token?: string) {
    return api.update<any>('devices', identifier, deviceData, token);
}
export function getDevice(identifier: string, token?: string) {
    return api.getById<any>('devices', identifier, token);
}
export function getDevices(token?: string) {
    return api.getAll<any>('devices', token);
}
export function deleteDevice(identifier: string, token?: string) {
    return api.deleteById('devices', identifier, token);
}












// export function addDevice(data: any, token?: string) {
//     return apiRequest(`/Devices/`, 'POST', data, token);
// }
// export function updateDevice(identifier: string, deviceData: any, token?: string) {
//     return apiRequest(`/Devices/${identifier}`, 'PUT', deviceData, token);
// }
// export function getDevice(identifier: string, token?: string) {
//     return apiRequest(`/Devices/${identifier}`, 'GET', undefined, token);
// }
// export function getDevices(token?: string) {
//     return apiRequest(`/Devices`, 'GET', undefined, token);
// }
// export function deleteDevice(identifier: string, token?: string) {
//     return apiRequest(`/Devices/${identifier}`, 'DELETE', undefined, token);
// }
// export function deleteAllDevices(token?: string) {
//     return apiRequest('/Devices', 'DELETE', undefined, token);
// }
// export function getAllDevices(token?: string) {
//     return apiRequest('/Devices', 'GET', undefined, token);
// }
// export function correlateDevices(identifier: string, correlationData: any, token?: string) {
//     return apiRequest(`/Devices/${identifier}/Correlate`, 'POST', correlationData, token);
// }
// export function uncorrelateDevices(identifier: string, correlationData: any, token?: string) {
//     return apiRequest(`/Devices/${identifier}/Uncorrelate`, 'DELETE', correlationData, token);
// }