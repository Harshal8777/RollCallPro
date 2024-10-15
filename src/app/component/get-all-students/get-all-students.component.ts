import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.css']
})
export class GetAllStudentsComponent implements OnInit {


  constructor(private studentService:StudentService){}
  ngOnInit(): void {
    this.getAllStudent();
  }
  
student: any;

getAllStudent()
{
  this.studentService.getAllStudent().subscribe((response) => { console.log(this.student)
    this.student = response;
   });
}

deleteStudent(id:any) {
  this.studentService.deleteStudent(id).subscribe((response) => { alert('student deleted successfully')
    this.getAllStudent();
  })
  }

}
