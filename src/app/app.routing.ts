import {Routes, RouterModule} from "@angular/router";
import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.component";
import {HeaderComponent} from "./header-comp/header.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes = [
   //{path: '', redirectTo: 'tasks', pathMatch: 'full'}
   //{path: '', component: HeaderComponent}
    // {path: 'about', component: AboutComponent, data: {title: 'About'}}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
