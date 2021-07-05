import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { AreaMedica } from '../../interfaces/area-medica.interface';

@Component({
  selector: 'app-lista-citas',
  templateUrl: './lista-citas.component.html',
  styleUrls: ['./lista-citas.component.css']
})
export class ListaCitasComponent implements OnInit {

  @Input() citas: Cita[] = [];
  @Input() areasMedicas: AreaMedica[] = [];
  @Output() onIdCita: EventEmitter<number> = new EventEmitter();

  citaActiva: string = 'todos';

  get arrCitas(){
    return this.citaActiva === 'todos' ? this.citas : this.citas.filter( cita => cita.area === this.citaActiva );
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  areaClass( area: string ){
    return {
      'bg-primary': area === 'general',
      'bg-info text-dark': area === 'dentista',
      'bg-warning text-dark': area === 'pediatra',
      'bg-success': area === 'nutriologia'
    }
  }

  filtrarCitas( area:string ){
    this.citaActiva = area;
  }

  eliminarCita( idCita:number ){
    this.onIdCita.emit( idCita );
  }

}
