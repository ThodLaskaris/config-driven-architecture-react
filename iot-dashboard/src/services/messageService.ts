import * as api from './apiService'
import { apiOptions } from "../types/ApiOptions";
import { Message } from '../types/Message';


export function getMessages(options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Message>('messages', options);
}
export function getDeviceMessages(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getAll<Message>(`messages/${identifier}/messages`, options);
}
export function getMessage(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Message>('messages', identifier, options);
}
export function getLastMessage(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Message>('messages/last', identifier, options);
}
export function getFirstMessage(identifier: string, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.getById<Message>('messages/first', identifier, options);
}
export function receiveMessage(message: Message, options: Omit<apiOptions, 'path' | 'method'> = {}) {
    return api.create<Message>('messages', message, options);
}