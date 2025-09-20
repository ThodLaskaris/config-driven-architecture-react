export interface Command {
  ID: number;
  Sent: string;
  Completed: boolean;
  CommandCode: string;
  CommandParams: string;
  DeviceId: string;
  LoraWanPort: number;
  ExecutedAt: string;
  CreatedAt: string;
  ValidUntil: string;
  Client: string;
}
export interface CommandsOutcome {
  ID: number;
  Name: string;
  Type: string;
  Status: string;
  'Last Seen': string;
  Location: string;
}