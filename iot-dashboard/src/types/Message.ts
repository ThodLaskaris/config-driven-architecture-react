export interface Message {
    id: string;
    data?: Record<string, any>;
    loraWanPort?: number;
    deviceId: string;
    receivedAt: string;
    decodedAt: string;
}