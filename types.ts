export enum Sender {
  USER = 'user',
  BOT = 'bot',
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  type?: 'welcome' | 'chat'; // 'chat' is the default if not specified
}