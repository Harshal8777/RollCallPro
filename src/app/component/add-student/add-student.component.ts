import { Component } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor(private studentService: StudentService){}
id: number=0;
name: string='';
email: string='';
student:any;


addStudent() {
  this.student={
    "id": this.id,
    "name": this.name,
    "email": this.email
  }

  this.studentService.addstudent(this.student).subscribe((response) => { alert("Student Added Successfully")
    this.resetform();
  });

}

resetform(){
  this.id=0;
  this.name="";
  this.email="";
}

}
