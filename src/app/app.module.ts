import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BirdwatchingComponent } from './birdwatching/birdwatching.component';
import { SignupComponent } from './signup/signup.component';
import { PreZerosPipe } from './pre-zeros.pipe';
import { ChangebgDirective } from './changebg.directive';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { GenderFilterComponent } from './employee/gender-filter/gender-filter.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    BirdwatchingComponent,
    SignupComponent,
    PreZerosPipe,
    ChangebgDirective,
    HomeComponent,
    EmployeeComponent,
    GenderFilterComponent,
    EmpDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
