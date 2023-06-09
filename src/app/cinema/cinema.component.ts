import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  cinema: any;
  constructor(private _ticket: TicketService) {

  }
  ngOnInit() {
    this._ticket.getAll().subscribe((data => {
      this.cinema = data;
      console.log(data)
    }))
  }


}

