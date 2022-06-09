export enum AUTHORS {
	USER = 'USER',
	BOT = 'BOT',
}

export interface Message {
	author: AUTHORS;
	text: string;
	id?: number;
}

export interface UserMessage {
	id: number,
	name: string,
	text: string,
}

export type Chat = UserMessage[];

