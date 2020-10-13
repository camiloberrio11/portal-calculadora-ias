import { TecnicoService } from './../tecnico.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-obtener-reporte',
  templateUrl: './obtener-reporte.component.html',
  styleUrls: ['./obtener-reporte.component.scss']
})
export class ObtenerReporteComponent implements OnInit {
  loading = false;
  identificacionTecnico: string;
  numSemana: string;
  listadoReporte: any[] = [];
  displayedColumns: string[] = ['idservicio', 'numerosemana', 'idtecnico', 'horasnormales', 'horasnocturas', 'horasdominicales', 'horasnormalesextras', 'horasnocturnasextras', 'horasdominicalesextras'];
  @ViewChild('formreporte') form: FormControl;

  constructor(
    private tecnicoService: TecnicoService,
    private toastr: ToastrService,
  ) {
  }

  ngOnInit(): void {
  }

  obtenerReporte(): void {
    this.loading = true;
    if (!this.numSemana.trim() || !this.identificacionTecnico.trim()) {
      Swal.fire({
        icon: 'warning',
        title: 'Un momento',
        text: 'Debes ingresar datos obligatorios',
      });
      this.loading = false;
      return;
    }

    this.tecnicoService.obtenerReporteXIdTecnicoXNumSemana(this.numSemana, this.identificacionTecnico).subscribe(dataFinal => {
      if (dataFinal.EsExitoso) {
        this.listadoReporte = dataFinal.Resultado;
        this.loading = false;
      } else {
        this.toastr.warning(dataFinal.Resultado);
        this.listadoReporte = [];
        this.loading = false;
      }
    },
    error => {
      this.toastr.error(error.Errors.Errors[0]);
      this.loading = false;
  });
  }

}
