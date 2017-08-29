import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';






/*___________________________mainContainer__Common__admin_________________________*/
import { MainContainer } from './../mainContainer/mainContainer';

import * as Common from '../common/index';

import * as Admin from '../admin/index';

/*__________________________END____mainContainer__Common__admin_________________________*/





const appRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: Common.Layout.Layout, data: { title: 'Login Views' }, children: Common.ROUTE },
     { path: '', component: Admin.Layout.Layout ,  data: { title: 'Secure Views' }, children: Admin.ROUTE },
    { path: '**', redirectTo: 'login' }
];



@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot(
        appRoutes
    ),
    HttpModule,
    FormsModule,
  ],
  declarations: [
    
MainContainer,
    Common.Components,

Admin.Components
  ],
 providers: [],
  bootstrap:    [ MainContainer],


})
export class AppRoute { }
