import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitasService } from '../../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-ver-cita',
  templateUrl: './ver-cita.component.html',
  styleUrls: ['./ver-cita.component.css']
})
export class VerCitaComponent implements OnInit {


  areaClass( area: string ){
    return {
      'bg-primary': area === 'general',
      'bg-info': area === 'dentista',
      'bg-success': area === 'nutriologia',
      'bg-warning': area === 'pediatra'
    }
  }

  constructor( private activateRoute: ActivatedRoute,
                private citasService: CitasService) { }

  cita!: Cita;


  ngOnInit(): void {
    this.activateRoute.params
    .subscribe( ( {id} )=>{
      this.cita = this.citasService.buscarCita( id )![0];      
    });
  }

  getAreaMedica( areaMedica:string ): string{
    return this.citasService.getAreaMedica( areaMedica );
  }


}
