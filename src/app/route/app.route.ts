import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as Car from './../admin/car/index';
import { FormsModule } from '@angular/forms';

//public
import * as Public from '../common/index';


import { RouterModule, Routes } from '@angular/router';



import * as adminLayout from './../admin/layout/index';

const appRoutes: Routes = [

{path: 'car', component: Car.Index , data: { title: 'Car List' }},
{path: 'car/create', component: Car.Create, data: { title: 'Create List' }},
{path: 'car/:id/edit', component: Car.Edit, data: { title: 'Edit List' }},
{path: 'car/:id', component: Car.Show, data: { title: 'Show List' }},

];



import { HttpModule } from '@angular/http';


@NgModule({
  imports:      [ BrowserModule,
    RouterModule.forRoot(
        appRoutes
    ),
    HttpModule,
    FormsModule,
  ],
  declarations: [
    adminLayout.Layout,
    Car.Index,
    Car.Create,
    Car.Edit,
    Car.Show,
    adminLayout.Header, adminLayout.Menu,
    
    Public.Login,
  
  ],
  bootstrap:    [ adminLayout.Layout ],

})
export class AppRoute { }
