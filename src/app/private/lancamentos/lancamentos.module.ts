import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { LancamentosComponent } from './lancamentos.component';


@NgModule({
  declarations: [
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    LancamentosRoutingModule
  ]
})
export class LancamentosModule { }
