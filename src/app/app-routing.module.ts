import { NgModule,  } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from './citas/pages/home/home.component';
import { VerCitaComponent } from './citas/pages/ver-cita/ver-cita.component';


const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'ver-cita/:id',
        component: VerCitaComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];


@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}