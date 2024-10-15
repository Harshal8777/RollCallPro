import { Component } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent {
 
  constructor(private subjectService:SubjectService){}

id:number=0;
name: string='';
sub:any;

addSubject() {
  this.sub={
    "id":this.id,
    "name":this.name

}
console.log(this.sub);
alert("sub");
  this.subjectService.addSubject(this.sub).subscribe((response)=>
  {
    
    alert("Subject Added")
    this.resetform();
 
  });

}

resetform(){
  this.id=0;
  this.name="";
}

}
