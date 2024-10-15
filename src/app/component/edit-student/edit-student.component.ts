import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  constructor(private studentService: StudentService,private activatedRoute: ActivatedRoute,private router: Router){}

 

  id: number=0;
name: string='';
email:string='';
student:any;
stu:any;
upStudent:any;

 
ngOnInit(): void {
  this.getStudentById();
}

getStudentById()
{
  this.stu=this.activatedRoute.snapshot.paramMap.get('id');
this.student=this.studentService.getStudentById(this.stu).subscribe((response) => {this.id=response.id,
  this.name=response.name,
  this.email=response.email
  console.log(this.name);
 });
}
updateStudent() {
this.upStudent = {
  "id":this.id,
  "name":this.name,
  "email":this.email,
}
this.studentService.updateStudent(this.upStudent).subscribe((response) => {
  alert('Student Updated Successfully');
  this.router.navigate(['/get-all-students']);
})



}
}

