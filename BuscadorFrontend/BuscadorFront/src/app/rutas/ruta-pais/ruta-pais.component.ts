import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/interfaces/convenio';
import { ConvenioServicioService } from 'src/app/servicios/convenio-servicio.service';

@Component({
  selector: 'app-ruta-pais',
  templateUrl: './ruta-pais.component.html',
  styleUrls: ['./ruta-pais.component.scss']
})
export class RutaPaisComponent implements OnInit {
  paistxt;
  busqueda: Convenio[] = [];
  totalcomvenios: Convenio[] = [];
  cols:any [];
  constructor(private readonly _convenioServicio: ConvenioServicioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router) { }

  ngOnInit() {

    this.cols = [
      { field: 'información', header: 'Informacion' },
      { field: 'objeto', header: 'Objeto' },
      { field: 'tipo', header: 'Tipo' },  
      { field: 'documento', header: 'Documento' }

  ];

  

 // this.totalcomvenios= this._convenioServicio.totalconvenios;
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
    .subscribe(
      (parametros: ParametrosRutaPais) => {
      this.paistxt = parametros.idPais;

      this.busqueda = [];
  //&& valuex.estado=='VIGENTE'
  const convenios$ = this.
  _convenioServicio.findAll();
  convenios$.subscribe((convenios: Convenio[]) => {
    //verificar si llegan los datos
    //console.log(convenios);
    this.totalcomvenios=convenios;
    const helado = this.totalcomvenios.forEach((valuex)=>{if ((valuex.pais==parametros.idPais)){
      this.busqueda.push(valuex);
    
    
    }
  
    
  });
  });
  
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  
  }
  Verpdf(id:number){

    this._router.navigate(['/pdf-convenios/'+id]);
  }
}
interface ParametrosRutaPais {
  idPais: string;
}