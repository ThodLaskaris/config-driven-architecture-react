export interface Command {
  id?: string; 
  createdAt?: string; 
  sent: boolean;
  completed: boolean;
  commandCode: string;
  commandParams: string[]; 
  deviceId?: string;
  deviceIdentifier?: string;
  loraWanPort?: number;
}

export interface CommandOutcome {
  id: string; 
  commandId: string; 
  success: boolean;
  message?: string;
  data?: any;
  receivedAt?: string; 
}