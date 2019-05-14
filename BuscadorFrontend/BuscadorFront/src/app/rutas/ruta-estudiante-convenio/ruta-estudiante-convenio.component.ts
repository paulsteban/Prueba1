import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convenio } from 'src/app/interfaces/convenio';
import { ConvenioServicioService } from 'src/app/servicios/convenio-servicio.service';
@Component({
  selector: 'app-ruta-estudiante-convenio',
  templateUrl: './ruta-estudiante-convenio.component.html',
  styleUrls: ['./ruta-estudiante-convenio.component.scss']
})
export class RutaEstudianteConvenioComponent implements OnInit {
  paistxt;
  busqueda: Convenio[] = [];
  totalcomvenios: Convenio[] = [];
  cols:any [];
  constructor(private readonly _convenioServicio: ConvenioServicioService,
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router) { }

  ngOnInit() {

    this.cols = [
      { field: 'información', header: 'Información' },  
      { field: 'acción', header: 'Acción' }

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

    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Universidad Nacional del Litoral",pais:"Argentina",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/146-universidad-nacional-del-litoral"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Universidad Tecnológica de Panamá",pais:"Panama",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/153-universidad-tecnologica-de-panama"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Universidade Estadual de Campinas - UNICAMP",pais:"Brasil",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/147-universidade-estadual-de-campinas-unicamp"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Universidad Pedagógica Nacional",pais:"Colombia",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/148-universidad-pedagogica-nacional"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Universidad El Bosque",pais:"Colombia",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/149-universidad-el-bosque"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"El Colegio de Michoacán A.C.",pais:"México",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/150-el-colegio-de-michoacan-a-c"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"Instituto Tecnológico de Sonora",pais:"México",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/152-instituto-tecnologico-de-sonora"});
    this.totalcomvenios.push({objeto:"Movilidad académica",organizacion:"UNIVERSIDAD DE CONCEPCIÓN",pais:"Chile",linkpagina:"https://oficinainternacional.epn.edu.ec/index.php/es/convenios-intercambio/140-universidad-de-concepcion"});


    const helado = this.totalcomvenios.forEach((valuex)=>{if ((valuex.pais==parametros.idPais)&&(valuex.objeto=="Movilidad académica")){
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
  Verpdf(id:string){

    this._router.navigate(['https://oficinainternacional.epn.edu.ec/index.php/es/']);
  }
}
interface ParametrosRutaPais {
  idPais: string;
}