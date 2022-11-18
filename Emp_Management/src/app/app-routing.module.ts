import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: "home", loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)},
{ path: "", loadChildren:()=> import('./login/login.module').then(m => m.LoginModule)},
{ path: "employeedetails/:id", loadChildren:()=> import('./details/details.module').then(m => m.DetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
