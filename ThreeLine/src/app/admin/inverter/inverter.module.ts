import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InverterRoutingModule } from './inverter-routing.module';
import { InverterListComponent } from './inverter-list/inverter-list.component';
import { InverterDetailComponent } from './inverter-detail/inverter-detail.component';
import { InverterEditComponent } from './inverter-edit/inverter-edit.component';

@NgModule({
  imports: [
    CommonModule,
    InverterRoutingModule
  ],
  declarations: [InverterListComponent, InverterDetailComponent, InverterEditComponent]
})
export class InverterModule { }
