import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-get-all-subjects',
  templateUrl: './get-all-subjects.component.html',
  styleUrls: ['./get-all-subjects.component.css']
})
export class GetAllSubjectsComponent implements OnInit {

subject: any;

constructor(private subjectService:SubjectService){}

ngOnInit(): void {
  this.getAllSubjects();
}

getAllSubjects()
{
  this.subjectService.getAllSubjects().subscribe((response) => {
    this.subject = response;
  });
}

deleteSubject(id: any) {
 this.subjectService.deleteSubject(id).subscribe((response) => { alert('Deleted Successfully')
  this.getAllSubjects();
 });
  

}
}
