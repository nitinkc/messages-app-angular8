import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Message } from 'src/app/messages-list/messages-list.component';


@Injectable({
  providedIn: 'root'
})
export class MessagesDataServiceService {

  constructor(
    private http: HttpClient
  ) { }

  baseUrl = environment.apiUrl;

  retrieveAllTodos() {
    return this.http.get<Message[]>(`${this.baseUrl}/messenger/all`);
  }
  
}
