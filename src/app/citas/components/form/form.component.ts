import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { AreaMedica } from '../../interfaces/area-medica.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  @Input() areasMedicas: AreaMedica[] = [];
  cita:Cita = {
    id: 0,
    area: '',
    nombre:'',
    edad: 0,
    fecha: '',
    hora: '',
    sintomas: ''
  }

  @Output() onCita: EventEmitter<Cita> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  enviarCita(){
    if( this.cita.area == '' || this.cita.nombre == '' ||  this.cita.edad == 0 || this.cita.fecha == '' || this.cita.hora == '' || this.cita.sintomas == ''){
      console.log('Por favor llene todos los campos');
      return;
    }

    const cadena:string = (`${ new Date().getUTCFullYear() } ${ new Date().getUTCDate() } ${ new Date().getUTCDay() } ${ new Date().getUTCHours() } ${ new Date().getUTCMinutes() }  ${ new Date().getUTCSeconds()}`).trim();
    const id:string = cadena.replace(/\s+/g, '');

    this.cita.id = parseInt( id );

    this.onCita.emit( this.cita );
    this.cita = {
      id: 0,
      area: '',
      nombre:'',
      edad: 0,
      fecha: '',
      hora: '',
      sintomas: ''
    }
  }

}
