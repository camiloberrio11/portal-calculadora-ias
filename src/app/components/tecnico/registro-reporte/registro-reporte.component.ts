import { TecnicoService } from './../tecnico.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-reporte',
  templateUrl: './registro-reporte.component.html',
  styleUrls: ['./registro-reporte.component.scss']
})
export class RegistroReporteComponent implements OnInit {
  loading = false;
  formReporte: FormGroup;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private tecnicoService: TecnicoService
  ) {
    this.formReporte = this.formBuilder.group({
      identificacionTecnico: ['', Validators.required],
      identificacionServicio: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      horaInicio: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
      minutosInicio: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
      fechaFin: ['', Validators.required],
      horaFin: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
      minutosFin: ['', [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],
    });
  }
  get f() { return this.formReporte.controls; }

  ngOnInit(): void {
  }

  registrarReporte(): void {
    this.loading = true;
    const strParams = {
      idTenico: this.formReporte.value.identificacionTecnico,
      idServicio: this.formReporte.value.identificacionServicio,
      fechaCompletaInicio: new Date(`${this.formReporte.value.fechaInicio}T${this.formReporte.value.horaInicio}:${this.formReporte.value.minutosInicio}:00.000Z`).toISOString(),
      fechaCompletaFin: new Date(`${this.formReporte.value.fechaFin}T${this.formReporte.value.horaFin}:${this.formReporte.value.minutosFin}:00.000Z`).toISOString(),
    };
    this.tecnicoService.crearReporte(strParams).subscribe(dataFinal => {
      if (dataFinal.EsExitoso) {
        this.toastr.success(dataFinal.Resultado, 'Proceso exitoso');
        this.loading = false;
      } else {
        this.toastr.warning(dataFinal.Resultado, 'Algo ha fallado');
        this.loading = false;
      }
    }, error => {
      this.toastr.error(error.Errors.Errors[0]);
      this.loading = false;      this.loading = false;
    });
  }

}
