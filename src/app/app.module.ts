import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SeatComponent } from './seat/seat.component';
import { CinemaComponent } from './cinema/cinema.component';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
 {path:"",component:CinemaComponent},
 {path:"seat",component:SeatComponent},
 {path:"edit",component:EditComponent},
 {path:"home",component:HomeComponent},
 

];
@NgModule({
  declarations: [
    AppComponent,
    SeatComponent,
    CinemaComponent,
    HomeComponent
  ],
 
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
