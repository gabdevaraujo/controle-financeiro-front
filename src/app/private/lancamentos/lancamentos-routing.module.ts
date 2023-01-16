import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './lancamentos.component';

const routes: Routes = [
  { path: '', component: LancamentosComponent },
  { path: 'novo',
    loadChildren: () => import('./novo/novo.module').then(
      (m) => m.NovoModule
    ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LancamentosRoutingModule { }
