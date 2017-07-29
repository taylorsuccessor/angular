import * as Common from '../index';
import { Routes, RouterModule } from '@angular/router';


export const COMMON_ROUTE: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Common.Login },
        { path: 'register', component: Common.Register },
           { path: 'recover', component: Common.Recover },
];