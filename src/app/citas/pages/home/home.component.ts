import { Component, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  agregarCita( cita: Cita ){
    console.log(cita);
    
  }

}
