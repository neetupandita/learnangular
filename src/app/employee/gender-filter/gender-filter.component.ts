import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gender-filter',
  templateUrl: './gender-filter.component.html',
  styleUrls: ['./gender-filter.component.scss']
})
export class GenderFilterComponent implements OnInit {
  showGender = ['Male', 'Female'];
  selectedValue: string="";
  allSelected: string="";

  @Output() 
  genderSelectedEvent = new EventEmitter();
    
  @Input() countM: number =0;
  @Input() countF: number =0;
  @Input() totalCount: number =0;
  
  constructor() { }
  
  ngOnInit(): void {
  }
   
  setGender( gender:string){
    this.selectedValue = gender;
    this.genderSelectedEvent.emit(this.selectedValue);
    console.log(this.selectedValue);
  }
 
  selectAllEmp( all:string){
    this.allSelected = all;
    this.genderSelectedEvent.emit(this.allSelected);
  }
}
