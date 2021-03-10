import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from './../app.service';

@Component({
  selector: 'app-emp-detail',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.scss']
})

export class EmpDetailComponent implements OnInit {
    id: any;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _appService:AppService) { 
      // this.id = this._Activatedroute.snapshot.params.id;
    }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      });
  }
  
  onBack(): void {
     this._router.navigate(['employee']);
  }
}
