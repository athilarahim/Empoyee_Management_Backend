import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list:IEmployee[]=[]
  teamlist:any[]=[]
 
 
   constructor(private router: Router) { }
 
   ngOnInit(): void {
     this.list=JSON.parse(localStorage.getItem('emplist') || '{}')
     this.teamlist=JSON.parse(localStorage.getItem('teamlist') || '{}')
 
   }
 
   
   showDetails(object:any) {
 
     const data = JSON.parse(localStorage.getItem('currentUser') || '{}')
    
       
       this.router.navigate(['/employeedetails',object.EmployeeId])
     
 
 
 
   }

}
