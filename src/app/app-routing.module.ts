import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(m => m.PrivateModule)
  },
  { path: 'lancamentos', loadChildren: () => import('./private/lancamentos/lancamentos.module').then(m => m.LancamentosModule) },
  { path: 'novo', loadChildren: () => import('./private/lancamentos/novo/novo.module').then(m => m.NovoModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
