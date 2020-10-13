import { ObtenerReporteComponent } from './obtener-reporte/obtener-reporte.component';
import { RegistroReporteComponent } from './registro-reporte/registro-reporte.component';
import { TecnicoComponent } from './tecnico.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TecnicoComponent,
    children: [
      {
        path: 'registroreporte',
        component: RegistroReporteComponent
      },
      {
        path: 'reporte',
        component: ObtenerReporteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicoRoutingModule { }
