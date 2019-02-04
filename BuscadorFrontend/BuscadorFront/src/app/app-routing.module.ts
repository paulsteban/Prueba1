import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaConveniosComponent } from './rutas/ruta-convenios/ruta-convenios.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'inicio'
  },
{
  path:'convenios',
  component: RutaConveniosComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
