import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  cita:Cita = {
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
    this.onCita.emit( this.cita );
    this.cita = {
      area: '',
      nombre:'',
      edad: 0,
      fecha: '',
      hora: '',
      sintomas: ''
    }
  }

}
