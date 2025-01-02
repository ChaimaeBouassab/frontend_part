import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HometComponent } from './homet/homet.component';


export const routes: Routes = [
  { path: '', component: HometComponent }, // Route par défaut
  { path: 'home', component: HometComponent }, 
  {path: 'login' , component : LoginComponent},
  { path: 'register', component :LoginComponent },
  
  
  // Exemple d'une autre route
];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}
