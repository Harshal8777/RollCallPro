import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
 

 
 
 
 

  constructor(private http:HttpClient ) {}

  addSubject(sub:any):Observable<any>{
    const url = 'http://localhost:8080/subject/add-subject';
    return this.http.post(url,sub);
  }

  getAllSubjects():Observable<any> {
   const url = 'http://localhost:8080/subject/get-all-subjects';
   return this.http.get(url);
  }

  getSubjectById(sub: any):Observable<any>{
    const url =  `http://localhost:8080/subject/get-subject-by-id/${sub}`;
    return this.http.get(url);
  }

  updateSubject(subject: any):Observable<any> {
    const url =  'http://localhost:8080/subject/update-subject';
    return this.http.put(url,subject);
  }

  deleteSubject(id: any):Observable<any> {
    const url = `http://localhost:8080/subject/delete-subject/${id}`;
return this.http.delete(url, { responseType: "text" });
  }

}
