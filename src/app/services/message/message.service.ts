import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  messages: string[] = [];

  add(message: string) {
    debugger;
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
