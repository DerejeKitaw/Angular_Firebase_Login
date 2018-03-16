import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InverterListComponent } from './inverter-list/inverter-list.component';
import { InverterDetailComponent } from './inverter-detail/inverter-detail.component';
import { InverterEditComponent } from './inverter-edit/inverter-edit.component';

const routes: Routes = [
  { path: 'inverters', component: InverterListComponent },
  {
    path: 'inverter/:id',
    // canActivate: [ InverterGuardService ],
    component: InverterDetailComponent
  },
  {
    path: 'inverter/:id/edit',
    component: InverterEditComponent,
    // canActivate: [AuthGuard, AdminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InverterRoutingModule {}
