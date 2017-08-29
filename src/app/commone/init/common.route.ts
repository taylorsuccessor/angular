import * as Public from '../index';
import { Routes, RouterModule } from '@angular/router';


export const COMMON_ROUTE: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Public.Login },
        { path: 'register', component: Public.Register },
           { path: 'recover', component: Public.Recover },
];