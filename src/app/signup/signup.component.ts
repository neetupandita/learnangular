import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  template: '<h2>{{ heading }}</h2>'
})
export class SignupComponent implements OnInit {
  heading = "Sign up";
  isEmployed: boolean = false;
  constructor() {  
    
  }
  
  @Input() data:any;
  title = ['Ms', 'Mr'];
  
  fullName: string ="";
  email: string ="";
  password: string ="";
  confirmPassword: string ="";
  gender: string ="";
  country: string ="";
  company: string ="";
  address: string ="";
  pincode: string ="";
  about: string ="";
  currentSal: string ="";
  expectedSal: string ="";
  selectedTitle: string="";
  formStatus: string="";
  
  ngOnInit(): void {
   this.fullName = "Neetu";
   this.company = "HashedIn";
   this.country = "India";
   console.log(this.title);
   this.formStatus = "";

  }

  cancel(): void {

      alert("Form is Cancelled!");
       this.formStatus = "cancel";

    }

  submit(): void {
      console.log(this.password);
      console.log(this.confirmPassword);
      if (this.password !== this.confirmPassword ) {
      alert("Password and Confirm Password didn't match!");
      } 
      else {
          alert("Form is submitted!");
          this.formStatus = "submit";
      }
        
  }
    
   setTitle( titl:string){
    this.selectedTitle = titl;
    console.log(this.selectedTitle);
   }




    // setTitle( type:string){
    //   if(type === "Ms")
    //   {
    //     this.title = "Ms";
    //   }
    //   else
    //   { 
    //      this.title = "Mr";
    //   }
    // }

}
