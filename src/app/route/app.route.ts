import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './../Apps/app';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import * as Car from './../admin/car/index';
import * as adminLayout from './../admin/layout/index';
import {ADMIN_ROUTE} from '../admin/admin.routes';

import * as Common from '../common/index';
import * as CommonLayout from '../common/layout/index';






const appRoutes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: CommonLayout.Layout, data: { title: 'Login Views' }, children: CommonLayout.COMMON_ROUTE },
     { path: '', component: adminLayout.Layout,  data: { title: 'Secure Views' }, children: ADMIN_ROUTE },
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
    
    CommonLayout.Layout,
    
    adminLayout.Layout,
    Car.Index,
    Car.Create,
    Car.Edit,
    Car.Show,
    adminLayout.Header,
     adminLayout.Menu,
     adminLayout.Pagination,

  Common.Login,
  Common.Register,
   Common.Recover,

AppComponent
  ],
 providers: [],
  bootstrap:    [ AppComponent],


})
export class AppRoute { }
