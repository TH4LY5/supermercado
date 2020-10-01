import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaTodosPage } from './lista-todos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaTodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaTodosPageRoutingModule {}
