import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertComponent } from 'src/app/components/alert/alert.component';
import { UserMessage } from '../../models/UserMessage.model';
import { WebSocketService } from './../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  userMessage: UserMessage = { name: '', message: 'Entrou no chat!' };

  constructor(
    private webSocketService: WebSocketService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.webSocketService.openWebSocketConnection();
    this.openDialog();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '300px',
      data: {
        name: this.userMessage.name,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.userMessage.name = result;
    });
  }

  sendMessage(): void {
    this.webSocketService.sendMessage(this.userMessage);
    this.userMessage.message = '';
  }

  getUsersMessages(): Array<UserMessage> {
    return this.webSocketService.getMessages();
  }

}
