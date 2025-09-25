import { Command } from '../types/command';
import { apiOptions } from "../types/ApiOptions";
import * as api from './apiService'

export function getCommands(options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Command>('command', options);
}
export function getCommand(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Command>('command', identifier, options);
}
export function createCommand(command: Command, options: Omit<apiOptions, 'path' | 'method' | 'body'> = {}){
    return api.create<Command>('command', command, options);
}
export function deleteCommand(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}){
    return api.deleteById('command', identifier, options);
}
