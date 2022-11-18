import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { IEmployee } from '../interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router){}

  getEmpData:IEmployee[] = []
  loglist:IEmployee[]=[]
  check:any=[]
  checkUser(){
    this.check=JSON.parse(localStorage.getItem('currentUser') || '{}')
    if(Object.keys(this.check).length === 0){
      return false
    }
    else{

      return this.check

    }
  }

  deleteUser(){
    localStorage.removeItem("currentUser");
    this.router.navigate(['/'])
    window.alert("Successfully logged out!")



  }

//  public newID: any;
//  public newPass: any

  saveUser(newID:any,newPass:any){
    
    this.getEmpData=JSON.parse(localStorage.getItem('emplist') || '{}')
    for(var i=0;i<this.getEmpData.length;i++){

      if(newID==this.getEmpData[i].EmployeeId && newPass==this.getEmpData[i].Password){
       
        console.log("Successfully logged");
        
        this.loglist.push({EmployeeId:newID,EmployeeName:this.getEmpData[i].EmployeeName,Password:newPass,Address:this.getEmpData[i].Address,
                          PhoneNumber:this.getEmpData[i].PhoneNumber,TeamNumber:this.getEmpData[i].TeamNumber})
      

        localStorage.setItem('currentUser',JSON.stringify(this.loglist))


        console.log(this.loglist);
       
       this.router.navigate(['/home'])
        return true
         
      }
      else{
        console.log("Invalid details");
      }
    }
  
    
      
    return false

  }

}

  
