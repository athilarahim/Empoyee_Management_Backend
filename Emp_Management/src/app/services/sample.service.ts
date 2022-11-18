import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http:HttpClient) { }

  public saveData(username:any,password:any ): Observable<any> {
    
    return this.http.post<any>('https://localhost:44353/api/Emp', {'username':username,'password':password});
  }
}
