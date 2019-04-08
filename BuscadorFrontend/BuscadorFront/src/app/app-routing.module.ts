import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaConveniosComponent } from './rutas/ruta-convenios/ruta-convenios.component';
import { RutaPDFComponent } from './rutas/ruta-pdf/ruta-pdf.component';
import { RutaMapaComponent } from './rutas/ruta-mapa/ruta-mapa.component';
import { RutaPaisComponent } from './rutas/ruta-pais/ruta-pais.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicio'
  },
{
  path:'convenios',
  component: RutaConveniosComponent
},
{
  path:'pdf-convenios/:idconvenio',
  component: RutaPDFComponent
},
{
  // NOMBRE
  path: 'mapa',

  component: RutaMapaComponent,
  // COMPONENTE,
  children:[
    {
     
      path: ':idPais',
      component: RutaPaisComponent,
    },

  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
