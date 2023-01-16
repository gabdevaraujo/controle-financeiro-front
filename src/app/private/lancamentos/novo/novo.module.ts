import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovoRoutingModule } from './novo-routing.module';
import { NovoComponent } from './novo.component';

import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {CalendarModule} from 'primeng/calendar';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CardModule} from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    NovoComponent
  ],
  imports: [
    CommonModule,
    NovoRoutingModule,
    PanelModule,
    InputTextModule,
    DropdownModule,
    InputMaskModule,
    CalendarModule,
    SplitButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextareaModule
  ]
})
export class NovoModule { }
