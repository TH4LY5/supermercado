import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrosModelPageRoutingModule } from './filtros-model-routing.module';

import { FiltrosModelPage } from './filtros-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrosModelPageRoutingModule
  ],
  declarations: [FiltrosModelPage]
})
export class FiltrosModelPageModule {}
