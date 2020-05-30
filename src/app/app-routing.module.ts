import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LogingComponent } from './loging/loging.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'profile' , component: ProfileComponent},
  {path:'aboutus' , component:AboutusComponent},
  {path: 'loging', component:LogingComponent},
  {path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
