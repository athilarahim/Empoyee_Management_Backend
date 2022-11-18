import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from './interface';
import { AuthService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-router';
  Emplist: IEmployee[] = []
  //list: IEmployee[] = []
  teamlist:any[] = []

  constructor(private authService:AuthService,private router:Router){}

  ngOnInit(): void {
    this.Emplist.push({ EmployeeId: "1", EmployeeName: "Athila", TeamNumber: 1, PhoneNumber: "789654123", Address: "dyjgukihi", Password: "athila123" },
      { EmployeeId: "2", EmployeeName: "Azhar", TeamNumber: 2, PhoneNumber: "782354123", Address: "vjhbkjhnlk", Password: "azhar123" },
      { EmployeeId: "3", EmployeeName: "Hanan", TeamNumber: 5, PhoneNumber: "795154123", Address: "srdjgkyh", Password: "hanan123" },
      { EmployeeId: "4", EmployeeName: "Sharron", TeamNumber: 7, PhoneNumber: "326598741", Address: "fjgfkj", Password: "sharron123" },
      { EmployeeId: "5", EmployeeName: "Aysha", TeamNumber: 8, PhoneNumber: "546123789", Address: "cjgvv", Password: "aysha123" },
      { EmployeeId: "6", EmployeeName: "Fawaz", TeamNumber: 3, PhoneNumber: "862475931", Address: "xgjfcbv", Password: "fawaz123" },
      { EmployeeId: "7", EmployeeName: "Akshay", TeamNumber: 4, PhoneNumber: "654789321", Address: "fjcjg", Password: "akshay123" },
      { EmployeeId: "8", EmployeeName: "Nanda", TeamNumber: 2, PhoneNumber: "654123987", Address: "dhfjdhi", Password: "nanda123" },
      { EmployeeId: "7", EmployeeName: "Arya", TeamNumber: 8, PhoneNumber: "8963257410", Address: "frwgthete", Password: "arya123" },
      { EmployeeId: "9", EmployeeName: "Sabarinath", TeamNumber: 1, PhoneNumber: "9863257410", Address: "dvgbhjukudgt", Password: "sabari123" }
      )

      this.teamlist.push({Teamno:1,Teamname:"Engineering"},
      {Teamno:2,Teamname:"Implementation"},
      {Teamno:3,Teamname:"Product"},
      {Teamno:4,Teamname:"Support"},
      {Teamno:5,Teamname:"TOPS"},
      {Teamno:6,Teamname:"ITSupport"},
      {Teamno:7,Teamname:"HR"},
      {Teamno:8,Teamname:"Admin"},)

    localStorage.setItem('emplist', JSON.stringify(this.Emplist))
    localStorage.setItem('teamlist', JSON.stringify(this.teamlist))


    //this.list = JSON.parse(localStorage.getItem('emplist') || '{}')
    
  localStorage.removeItem('currentUser')
  }
  
  authChecking(){
    if(this.authService.checkUser()) return true;
    return false
  }

  deleteDetails(){
    this.authService.deleteUser()
  }
}
