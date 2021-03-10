import { AppService } from './../app.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})

export class EmployeeComponent implements OnInit {
  valueSelected: string= "";
  countM: number= 0;
  countF: number= 0;
  totalCount: number =0;
  employeeCode: string="";

  constructor(private appService: AppService) { }
   
  ngOnInit(): void {
    for(let i= 0; i< this.employees.length; i++){
      if(this.employees[i].gender === 'Male'){
        this.countM++;
      }
      else if(this.employees[i].gender === 'Female'){
        this.countF++;
      }
      this.totalCount = this.employees.length;
    }

  }

  // getEmployee(){
  //   var val = {employeeCode:this.employeeCode};
  //   this.appService.getEmployee(val)
  //   .subscribe(res=>  {
  //     alert(res.toString());
  //   });
  // }

  employees: {code: string, name: string, gender: string, annualSal: number, dob: string}[] = [
    {code: 'EMP101', name: 'Sonu', gender: 'Male', annualSal: 123, dob: '12/08/1990' },
    {code: 'EMP102', name: 'Monu', gender: 'Male', annualSal: 123, dob: '12/08/1990' },
    {code: 'EMP103', name: 'Tonu', gender: 'Male', annualSal: 123, dob: '12/08/1990' },
    {code: 'EMP104', name: 'Priya', gender: 'Female', annualSal: 123, dob: '12/08/1990' },
    {code: 'EMP105', name: 'Riya', gender: 'Female', annualSal: 123, dob: '12/08/1990' },
    {code: 'EMP106', name: 'Raj', gender: 'Male', annualSal: 123, dob: '12/08/1990' },
];

  genderSelectedHandler(value: any){
    this.valueSelected = value;
    console.log(this.valueSelected);
  }

   getEmployeesByFilter(value: any){
    if(value === "Male" || value === "Female"){
      return this.employees.filter(x => x.gender === value);
    }
    else {
      return this.employees;
    }
  }

}
