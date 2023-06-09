import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cinema } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  cinema:any;
  constructor(private _httpClient: HttpClient) { }
  getAll():Observable<cinema[]>{
    return this._httpClient.get<cinema[]>('http://localhost:3000/cinema');
  }
  update(data: any) {
    console.log(data)
    return this._httpClient.put<cinema>('http://localhost:3000/cinema/' + data.id, data);
  }
}



