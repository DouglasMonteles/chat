import { Component, OnInit } from '@angular/core';
import { User } from './../../models/User.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  user: User = { name: 'douglas', message: 'oi' }

  constructor() { }

  ngOnInit(): void {
  }

}
