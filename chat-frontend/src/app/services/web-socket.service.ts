import { Injectable } from '@angular/core';
import { UserMessage } from './../models/UserMessage.model';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  webSocket: WebSocket;
  chatMessages: UserMessage[] = [];

  constructor() { 
    this.webSocket = new WebSocket(`${environment.wsBaseURL}/chat`);
  }

  openWebSocketConnection(): void {
    this.webSocket.onopen = (event) => console.log('Open: ' + event);

    this.webSocket.onmessage = (event) => {
      const userMessage = JSON.parse(event.data);
      this.chatMessages.push(userMessage);
    };

    this.webSocket.onclose = (event) => console.log('Close: ' + event);
  }

  sendMessage(message: UserMessage): void {
    this.webSocket.send(JSON.stringify(message));
  }

  closeWebSocket(): void {
    this.webSocket.close();
  }

  getMessages(): Array<UserMessage> {
    return this.chatMessages;
  }

}
