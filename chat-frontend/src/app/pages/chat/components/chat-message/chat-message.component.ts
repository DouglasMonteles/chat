import { Component, Input, OnInit } from '@angular/core';
import { User } from './../../../../models/User.model';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input()
  user: User = {
    name: '',
    message: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
