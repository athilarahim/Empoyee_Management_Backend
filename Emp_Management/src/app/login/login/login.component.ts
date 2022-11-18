import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interface';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin:boolean | undefined;
  getEmpData:IEmployee[] = []
  loglist:any[] = []
   constructor(private router:Router,private authService:AuthService) { }


  ngOnInit(): void {
    
  }

  addUserForm = new FormGroup(
    {
    EmployeeId: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required]),
  }

  );

  public newID:any;
  public newPass:any;

  saveUser(){
    this.authService.saveUser(this.newID,this.newPass)
  }
}
