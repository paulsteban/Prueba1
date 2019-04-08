import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Convenio } from '../interfaces/convenio';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConvenioServicioService {
nombreModelo = '/Convenios'
totalconvenios: Convenio[] = [];
url1 = 'http://localhost:1337/Convenios?limit=100'
  constructor(private readonly _httpClient: HttpClient) { }

  findAll(): Observable <Convenio[]> {
    const convenios$ = this._httpClient.get(this.url1)
    .pipe(map(respuesta => {
      return <Convenio[]> respuesta
    }));
    return convenios$;
  }

  delete(id: number): Observable<Convenio> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(r => <Convenio> r)); // Castear
  }
}

