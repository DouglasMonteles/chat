import { Component, Input, OnInit } from '@angular/core';
import { UserMessage } from '../../../../models/UserMessage.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  user: UserMessage = {
    name: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
