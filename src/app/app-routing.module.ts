import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'empleados',pathMatch:'full'},//si ingresa vacio
  {path:'empleados',loadChildren:()=>import('./pages/empleados/empleados.module').then(x=>x.EmpleadosModule)},//esto es carga perezoza
  {path:'**',redirectTo:'empleados',pathMatch:'full'}//si ingresa una direccion incorrecta
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
