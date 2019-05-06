import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaConveniosComponent } from './rutas/ruta-convenios/ruta-convenios.component';
import { RutaPDFComponent } from './rutas/ruta-pdf/ruta-pdf.component';
import { RutaMapaComponent } from './rutas/ruta-mapa/ruta-mapa.component';
import { RutaPaisComponent } from './rutas/ruta-pais/ruta-pais.component';
import { RutaEstudianteConvenioComponent } from './rutas/ruta-estudiante-convenio/ruta-estudiante-convenio.component';
import { RutaEstudianteComponent } from './rutas/ruta-estudiante/ruta-estudiante.component';
import { RutaMapaProfComponent } from './rutas/ruta-mapa-prof/ruta-mapa-prof.component';
import { RutaUniversidadComponent } from './rutas/ruta-universidad/ruta-universidad.component';

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
  path:'universidad/:idUniversidad',
  component: RutaUniversidadComponent
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
},
{
  // NOMBRE
  path: 'convenioestudiante',

  component: RutaEstudianteComponent,
  // COMPONENTE,
  children:[
    {
     
      path: ':idPais',
      component: RutaEstudianteConvenioComponent,
    },

  ]
},
{
  // NOMBRE
  path: 'conveniosprofesor',

  component: RutaMapaProfComponent,
  // COMPONENTE,
  children:[
    {
     
      path: ':idPais',
      component: RutaPaisComponent,
    },

  ]
},

];

@NgModule({
  imports: [ RouterModule.forRoot(
    routes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
