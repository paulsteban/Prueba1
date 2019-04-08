import { Component, OnInit } from '@angular/core';
import { ConvenioServicioService } from './servicios/convenio-servicio.service';
import { Convenio } from './interfaces/convenio';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'BuscadorFront';
  
  constructor(private readonly _convenioServicio: ConvenioServicioService) { }

  ngOnInit(){
    const convenios$ = this.
  _convenioServicio.findAll();
  convenios$.subscribe((convenios: Convenio[]) => {
    //verificar si llegan los datos
    //console.log(convenios);
    this._convenioServicio.totalconvenios=convenios;
  });


  }
}


