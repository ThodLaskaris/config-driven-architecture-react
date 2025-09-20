import * as api from './apiService'
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;


const function getMessages(token?: string) {
    return api.getAll<any>('messages', token);
}
const function getMessage(identifier: string, token?: string) {
    return api.getById<any>('messages', identifier, token);
}
