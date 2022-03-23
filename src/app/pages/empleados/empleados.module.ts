import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ListaEmpleadosComponent,
    FormEmpleadosComponent
  ],
  imports: [
    CommonModule,
    EmpleadosRoutingModule,
    SharedModule
  ],
  exports:[
    ListaEmpleadosComponent,
    FormEmpleadosComponent
  ]
})
export class EmpleadosModule { }
