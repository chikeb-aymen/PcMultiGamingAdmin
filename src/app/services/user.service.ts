import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServeUrl = environment.apiBaseUrl;
  
  constructor(private http: HttpClient) {}

  
  public getUserDetails(userId:number): Observable<User>{
    return this.http.get<User>(`${this.apiServeUrl}/api/v1/user/details/${userId}`);
  }

  public updateUser(body:object,userId:number){
    return this.http.post(`${this.apiServeUrl}/api/v1/user/update/${userId}`,body).subscribe(e => {
      console.log("function user update work")
      window.location.href = "/#/account"
    });
  }

  public updateUserPassword(body:object,userId:number){
    return this.http.post(`${this.apiServeUrl}/api/v1/user/update/password/${userId}`,body).subscribe(e => {
      console.log("function password update work")
      window.location.href = "/#/account"
    });
  }
  
}
