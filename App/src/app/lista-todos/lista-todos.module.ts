import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaTodosPageRoutingModule } from './lista-todos-routing.module';

import { ListaTodosPage } from './lista-todos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaTodosPageRoutingModule
  ],
  declarations: [ListaTodosPage]
})
export class ListaTodosPageModule {}
