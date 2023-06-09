import { Component, Input, OnInit } from '@angular/core';
import { seat } from '../models';
import { TicketService } from '../ticket.service';
import { HttpClientModule } from '@angular/common/http';

export interface BalconySection {
  id: number;
  isAvailable: boolean;
}

export interface Seat {
  id: number;
  isAvailable: boolean;
  balconySection: any
}
@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.scss']
})
export class SeatComponent implements OnInit {
  @Input() balconySection!: seat[];
  isBooked = false;
  isClicked = false;
  isAvailable = false;
  seat: any;
  cinema: any;
  disabled: false = false;
  selectedSeats: seat[] = [];
constructor(private _seat:TicketService){

}

  ngOnInit(): void {
    console.log(this.balconySection)
 
  }

  toggleSeat(seat: seat) {
    seat.isActive = !seat.isActive;
    this.selectedSeats.push(seat)
    console.log(this.selectedSeats)
  }

  bookSeats() {
    const selectedSeats = this.balconySection.filter(seat => seat.isActive);
    selectedSeats.forEach(seat => {
      seat.isAvailable = false;
      seat.disabled = true;
    
    this._seat.update(this.selectedSeats).subscribe(res=>
    console.log(res))
    
    });














    

    // ngOnInit() {
    //   this._ticket.getAll().subscribe((data => {
    //     this.cinema = data;
    //     console.log(data)
    //   }))
    // }
  
// this.balconySection=this.balconySection.filter(seat=>!selectedSeats.includes(seat))

    // Remove the selected seats from the balconySection array
    // this.balconySection = this.balconySection.filter(seat => !selectedSeats.includes(seat));
  }
}
