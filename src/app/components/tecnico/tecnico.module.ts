import { TecnicoService } from './tecnico.service';
import { SharedModule } from './../../shared/shared.module';
import { TecnicoComponent } from './tecnico.component';
import { TecnicoRoutingModule } from './tecnico-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroReporteComponent } from './registro-reporte/registro-reporte.component';
import { ObtenerReporteComponent } from './obtener-reporte/obtener-reporte.component';
import { NgxLoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TecnicoComponent, RegistroReporteComponent, ObtenerReporteComponent],
  imports: [
    CommonModule,
    TecnicoRoutingModule,
    NgxLoadingModule.forRoot({}),
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [TecnicoService]
})
export class TecnicoModule { }
