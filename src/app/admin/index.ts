import { Routes } from '@angular/router';

import * as Layout from './layout/index';
import * as Car from './car/index';


export {Layout}  ;
  
export const ROUTE: Routes = [
    {path: 'car/create' , component: Car.Create},
    {path: 'car', component: Car.Index  },
    {path: 'car/:id/edit', component: Car.Edit},
    {path: 'car/:id', component: Car.Show},
  ];




export const Components=[
  
   Layout.Layout,

 Layout.Header,
     Layout.Menu,
     Layout.Pagination,
     
     Car.Index ,
   Car.Create,
    Car.Edit,
    Car.Show];