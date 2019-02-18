import { Component, OnInit } from '@angular/core';
import { ConvenioServicioService } from 'src/app/servicios/convenio-servicio.service';
import { Convenio } from 'src/app/interfaces/convenio';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ruta-convenios',
  templateUrl: './ruta-convenios.component.html',
  styleUrls: ['./ruta-convenios.component.scss']
})
export class RutaConveniosComponent implements OnInit {
  usuarios: Convenio[] = [];
  cbxorganizacion= [];
  cbxpais= [];
  cbxtipo= [];
  busqueda: Convenio[] = [];
cols:any [];
  show: boolean = false ;
  show1: boolean = true ;
  hideme= true ;
  constructor(private readonly _convenioServicio: ConvenioServicioService,
    private readonly _router:Router) {

   }

  ngOnInit() {
    this.cols = [
      { field: 'n', header: 'Nº' },
      { field: 'información', header: 'Informacion' },
      { field: 'objeto', header: 'Objeto' },
      { field: 'tipo', header: 'Tipo' },  
      { field: 'documento', header: 'Documento' }

  ];

    const convenios$ = this.
    _convenioServicio.findAll();
    convenios$.subscribe((convenios: Convenio[]) => {
      //verificar si llegan los datos
      //console.log(convenios);
      this.usuarios=convenios;
     //filtrar cbx organizacion inicos
      this.cbxorganizacion = convenios.map((valuex,indice,convenios)=>
      {let prueba =valuex.organizacion;
       // console.log(valuex.organizacion);
      return prueba}).filter((valuex, index, self)=>{return self.indexOf(valuex) === index;});
       //fin cboxorganizacion filtado 
      //llenado Combo box pais
      this.cbxpais = convenios.map((valuex,indice,convenios)=>
      {let prueba =valuex.pais;
        //console.log(valuex.pais);
      return prueba}).filter((valuex, index, self)=>{return self.indexOf(valuex) === index;});
      //fin cboxpais filtado 
      //llenado Combo box tipo
      this.cbxtipo = convenios.map((valuex,indice,convenios)=>
      {let prueba =valuex.tipo;
        //console.log(valuex.tipo);
      return prueba}).filter((valuex, index, self)=>{return self.indexOf(valuex) === index;});
         //fin cboxtipo filtado 
        console.log("Tipo"+this.cbxtipo.length);
        console.log("Organizacion"+this.cbxorganizacion.length);
        console.log("Pais"+this.cbxpais.length);

    });
  
    
  }
  clickMessage = '';

  onClickMe(f: NgForm) {
    this.show = true;
    this.show1 = false;
   /* const helado=this.usuarios.find((valuex)=>{return valuex.pais==f.value.BrowPais
   // console.log(valuex.organizacion+"1");
    //console.log(f.value.BrowOrganizacion+"2")
  });*/
  this.busqueda = [];
  //&& valuex.estado=='VIGENTE'
  const helado = this.usuarios.forEach((valuex)=>{if ((valuex.pais==f.value.BrowPais || valuex.organizacion==f.value.BrowOrganizacion || valuex.tipo==f.value.BrowTipo)){
    this.busqueda.push(valuex);}
});
    //this.clickMessage = "convenios :)";

    //console.log(f.value);
    console.log(this.busqueda);
  //  console.log(busqueda+"Busqueda es:");
   

  }

  Verpdf(id:number){

    this._router.navigate(['/pdf-convenios/'+id]);
  }


}
