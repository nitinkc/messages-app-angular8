import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesDataServiceService } from '../service/data/messages-data-service.service';

export class Message {
  constructor(
    public id: number,
    public message: string,
    public createdDate: Date,
    public user: string
  ) { }
}

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  messages: Message[]

  constructor(
    private messagesService: MessagesDataServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.messagesService.retrieveAllTodos().subscribe(
      response => {
        this.messages = response;
        console.log(response);
      },
      error => { }
    )
  }

}