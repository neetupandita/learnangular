import { EmployeeComponent } from './employee/employee.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  message: string="The Selected Employee is";
  constructor() { }
  
  ngOnInit() {
  }

  getEmpDetails(val:any) {
    return this.message + val;
  }
}
