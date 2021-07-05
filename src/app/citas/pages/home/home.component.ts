import { Component, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { AreaMedica } from '../../interfaces/area-medica.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  citas: Cita[] = [];
  areasMedicas:AreaMedica[] = [ 
    {
      clave: 'general',
      desc: 'General'  
    },
    {
      clave: 'dentista',
      desc: 'Dentista'
    },
    {
      clave: 'pediatra',
      desc: 'Pediatra'
    },
    {
      clave: 'nutriologia',
      desc: 'Nutriología'
    }
   ];

  constructor() { 
    this.citas = JSON.parse(localStorage.getItem('citas')!) || [];
  }

  ngOnInit(): void {
  }

  agregarCita( cita: Cita ){
    this.citas.push( cita )    
    localStorage.setItem( 'citas',JSON.stringify( this.citas) );
  }

  eliminarCita( idCita: number ){
    this.citas.forEach( (cita, idx) =>{
      if( cita.id === idCita ){
        this.citas.splice( idx, 1 );
        return;
      }
    });
    localStorage.setItem( 'citas', JSON.stringify( this.citas ));
  }

}
