export enum AUTHORS {
	USER = 'USER',
	BOT = 'BOT'
}

export interface Message {
	author: AUTHORS,
	text: string
}