import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
 
  
 
 
  constructor(private http:HttpClient) { }

  getAllStudent():Observable<any> {
    const url = 'http://localhost:8080/student/get-all-students'
    return this.http.get(url);
  }

  addstudent(student: any):Observable<any> {
    const url = 'http://localhost:8080/student/add-student';
    return this.http.post(url, student);
  }

  getStudentById(stu: any):Observable<any> {
    const url = `http://localhost:8080/student/get-student-by-id/${stu}`;
    return this.http.get(url);
  }

  updateStudent(upStudent: any):Observable<any> {
    const url = 'http://localhost:8080/student/update-student';
    return this.http.put(url,upStudent);
  }

  deleteStudent(id: any) {
    const url = `http://localhost:8080/student/delete-student/${id}`;
    return this.http.delete(url, { responseType: "text" });
  }
 

}
