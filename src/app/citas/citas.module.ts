import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

import { ListaCitasComponent } from './components/lista-citas/lista-citas.component';
import { HomeComponent } from './pages/home/home.component';
import { VerCitaComponent } from './pages/ver-cita/ver-cita.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FormComponent,
    ListaCitasComponent,
    HomeComponent,
    VerCitaComponent,
    HeaderComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CitasModule { }
