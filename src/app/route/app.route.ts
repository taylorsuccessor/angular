import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import * as Car from './../admin/car/index';
import { FormsModule } from '@angular/forms';




import { RouterModule, Routes } from '@angular/router';



import * as adminLayout from './../admin/layout/index';

const appRoutes: Routes = [

{path: 'car',component: Car.Index,data: { title: 'Heroes List' }},
{path: 'car/create',component: Car.Create,data: { title: 'Heroes List' }},
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


    adminLayout.Header,adminLayout.Menu
  ],
  bootstrap:    [ adminLayout.Layout ],

})
export class AppRoute { }
