import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { HomeComponent } from './pages/home/home.component';
import { VerCitaComponent } from './pages/ver-cita/ver-cita.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormComponent,
    ListaCitasComponent,
    HomeComponent,
    VerCitaComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CitasModule { }
