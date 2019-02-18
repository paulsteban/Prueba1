import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaConveniosComponent } from './rutas/ruta-convenios/ruta-convenios.component';
import { RutaPDFComponent } from './rutas/ruta-pdf/ruta-pdf.component';

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
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
