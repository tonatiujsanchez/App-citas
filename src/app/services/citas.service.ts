import { Injectable } from '@angular/core';
import { Cita } from '../citas/interfaces/cita.interface';
import { AreaMedica } from '../citas/interfaces/area-medica.interface';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  citas: Cita [] = [];
  areasMedicas:AreaMedica [] = [ 
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
  
  get allCitas(): Cita[] {
    return this.citas;
  }
  get allAreasMedicas(): AreaMedica[] {
    return this.areasMedicas;
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

  buscarCita( id: number ){
    return this.citas.filter( cita => cita.id == id )
  }


  /* Area */
  getAreaMedica( claveArea: string ):string{
    let area:string = '';

    this.areasMedicas.forEach( areaMedica =>{
      if( areaMedica.clave === claveArea ){
        area = areaMedica.desc;
        return;
      }
    });
    return area;
  }


}


