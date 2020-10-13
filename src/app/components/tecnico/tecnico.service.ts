import { environment } from './../../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  private urlService: any = environment;

  constructor(
    private http: HttpClient
  ) { }

  obtenerReporteXIdTecnicoXNumSemana(numSemana: string, idTecnico: string): Observable<any> {
    return this.http.get(`${this.urlService.obtenerReportes}${idTecnico}/${numSemana}`,
    { headers: this.optionsHeaders()}).pipe(
      catchError(this.handleError)
    );
  }

  crearReporte( params): Observable<any> {
    return this.http.post(`${this.urlService.guardarservicio}`,
    params,
    { headers: this.optionsHeaders()}).pipe(
      catchError(this.handleError)
    );
  }
  private optionsHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('content-type', 'application/json');
    return headers;
  }

  private handleError<T>(error: Response | any): Observable<any> {
    const setError = (error._body) ? JSON.parse(error._body) : error.error;
    const json = {
      Errors: setError,
      Resultado: [],
      EsExitoso: false,
      Status: error.status
    };
    return throwError(json);
  }
}
