import { Command } from '../types/command';
import * as api from './apiService'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export function getCommands(token?: string) {
  return api.getAll<Command>('commands', token);
}
export function getCommand(identifier: string, token?: string) {
    return api.getById<Command>('commands', identifier, token);
}
export function postCommand(command: Command, token?: string){
    return api.create<Command>('commands', command, token);
}
export function deleteCommand(identifier: string, token?: string){
    return api.deleteById('commands', identifier, token);
}

    

// export function getCommands(identifier: string, token?: string) {
//     return apiRequest(`${API_BASE_URL}/commands/${identifier}`, 'GET', token);
// } 
// export function getCommand(identifier: string, token?: string) {
//     return apiRequest(`${API_BASE_URL}/Commands/${identifier}`, 'GET', token);
// }
// export function postCommand(command: any, token?: string){
//     return apiRequest(`${API_BASE_URL}/commands`, 'POST', token, command);
// }
// export function deleteCommand(identifier: string, token?: string){
//     return apiRequest(`${API_BASE_URL}/commands/${identifier}`, 'DELETE', token);
// }
