import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  

  constructor(private http:HttpClient) { }

  addUser(firstName:string,
          lastName:string,
          password:string,
          email:string,
          role:string,
          username:string):Observable<any>
          {
            const url = 'http://localhost:8080/user/register-user';
            return this.http.post(url, { firstName, lastName, password,email,role,username});
          }

          getAllUsers():Observable<any>
          {
            const url = 'http://localhost:8080/user/get-all-user';
            return this.http.get(url);
          }

          getUserByUsername(selectedUsername:string):Observable<any>
          {
            const url = `http://localhost:8080/user/get-user-by-username/${selectedUsername}`;
            return this.http.get(url);
          }

          updateUser(user: any):Observable<any> {
           const url = 'http://localhost:8080/user/update-user';
           return this.http.put(url, user);
          }

          deleteUser(username: any):Observable<any> {
            const url =  'http://localhost:8080/user/delete-user-by-username';
            const params = new HttpParams().set('username',username);
            return this.http.delete(url, { params ,responseType:"text"});
          }
}
