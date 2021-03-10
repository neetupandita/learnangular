import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirdwatchingComponent } from './birdwatching/birdwatching.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'birdwatching',
    component: BirdwatchingComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'details/:id',
    component: EmpDetailComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
