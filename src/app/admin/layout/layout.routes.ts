
import * as Car from '../car/index';
import { Routes, RouterModule } from '@angular/router';
//import { AuthGuard } from '../../layoutSwitcher/auth.guard';

export const ADMIN_ROUTE: Routes = [
    {path: "car/create" , component: Car.Create},
    {path:"car", component: Car.Index  },//, canActivate: [AuthGuard]
    {path:"car/:id/edit", component: Car.Edit},
    {path:"car/:id", component: Car.Show},
  ];
