import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/service/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit{
  constructor(private subjectService: SubjectService,private activatedRoute: ActivatedRoute,private router:Router) { }
id: number=0;
name: string='';
sub: any;
subject: any;

ngOnInit(): void {
  this.getSubject();
}
getSubject() {
 this.sub=this.activatedRoute.snapshot.paramMap.get("id")

return this.subjectService.getSubjectById(this.sub).subscribe((response) => {
  this.id=response.id;
  this.name=response.name;
});
}

updateSubject() {
  const subject = {
    id: this.id,
    name: this.name
  };

  this.subjectService.updateSubject(subject).subscribe(
    (response) => {
      alert('Subject Updated Successfully');
      this.router.navigate(['/get-all-subjects']);

    },
    (error) => {
      console.error("Error updating subject:", error);
    }
  );
}

  

}
