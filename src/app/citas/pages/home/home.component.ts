import { Component, OnInit } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';
import { AreaMedica } from '../../interfaces/area-medica.interface';
import { CitasService } from '../../../services/citas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  citas: Cita[] = [];
  areasMedicas:AreaMedica[] = [];

  constructor( private citasService: CitasService ) { 
    
  }

  ngOnInit(): void {
    this.citas = this.citasService.allCitas;
    this.areasMedicas = this.citasService.allAreasMedicas;
  }

  agregarCita( cita: Cita ){
    this.citasService.agregarCita( cita );
  }

  eliminarCita( idCita: number ){
    this.citasService.eliminarCita( idCita );
  }

}
