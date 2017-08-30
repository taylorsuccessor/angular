import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-mneu',
  template: `
<div class="navbar-default sidebar" role="navigation">
            <div class="sidebar-nav navbar-collapse slimscrollsidebar">
                <ul class="nav" id="side-menu">
                    <li class="sidebar-search hidden-sm hidden-md hidden-lg">
                        <!-- input-group -->
                        <div class="input-group custom-search-form">
                            <input type="text" class="form-control" placeholder="Search..."> <span class="input-group-btn">
            <button class="btn btn-default" type="button"> <i class="fa fa-search"></i> </button>
            </span> </div>
                        <!-- /input-group -->
                    </li>
                    <li class="user-pro">
                        <a routerLink="/login" class="waves-effect"><i class="fa fa fa-dashboard" data-icon="v"></i> <span class="hide-menu"> Dashboard<span class="fa arrow"></span></span>
                        </a>
                        <ul class="nav nav-second-level">
                            <li><a routerLink="/car"> Dashboard</a></li>
                           
                        </ul>
                    </li>
                    <li class="nav-small-cap m-t-10">--- Main Menu</li>
                    <li> <a routerLink="/car" class="waves-effect"><i class="fa fa  fa-coffee" data-icon="v"></i> <span class="hide-menu"> Coffe <span class="fa arrow"></span> <span class="label label-rouded label-custom pull-right">1</span></span></a>
                        <ul class="nav nav-second-level" >
                              <li> <a routerLink="/car">Car</a> </li>
                                    <li> <a routerLink= "/car/create">Create New Car</a> </li>   
                        </ul>
                    </li>



   
                  
                </ul>
            </div>




            
        </div>
`,

})
export class Menu  {




}
