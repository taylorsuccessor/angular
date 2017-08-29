
import { Routes, RouterModule } from '@angular/router';

import * as Layout from './layout/index';

import {Login} from './login/login';
import {Register} from './register/register';
import {Recover} from './recover/recover';




export {Layout};
export const ROUTE: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },
        { path: 'register', component:  Register },
           { path: 'recover', component:  Recover },
];

export const Components = [

Layout.Layout,
    

   Login,
   Register,
   Recover
 ];