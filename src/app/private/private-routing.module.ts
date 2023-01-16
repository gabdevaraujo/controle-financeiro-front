import { LancamentosComponent } from './lancamentos/lancamentos.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: LancamentosComponent },
  { path: 'lancamentos',
    loadChildren: () =>
      import('./lancamentos/lancamentos.module').then(
        (m) => m.LancamentosModule
      ),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
