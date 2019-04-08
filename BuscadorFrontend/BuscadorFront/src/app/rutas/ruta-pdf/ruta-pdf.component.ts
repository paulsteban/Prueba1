import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ruta-pdf',
  templateUrl: './ruta-pdf.component.html',
  styleUrls: ['./ruta-pdf.component.scss']
})
export class RutaPDFComponent implements OnInit {
   id;
  constructor(private readonly _activatedRoute: ActivatedRoute,
    private readonly _router:Router,) { }

  ngOnInit() {
    const rutaActiva$ = this._activatedRoute.params;
    rutaActiva$
      .subscribe(
        (parametros: ParametrosPDF) => {
         this.id= parametros.idconvenio;

        }
      );
  
  }
  regresar(){

    this._router.navigate(['/convenios/']);
  }

}
interface ParametrosPDF {
  idconvenio: string;
}