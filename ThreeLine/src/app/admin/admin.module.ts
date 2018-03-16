import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { InverterModule } from './inverter/inverter.module';

@NgModule({
  imports: [
    CommonModule,
    InverterModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
