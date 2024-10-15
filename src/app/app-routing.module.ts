import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { EditSubjectComponent } from './component/edit-subject/edit-subject.component';

import { GetAllSubjectsComponent } from './component/get-all-subjects/get-all-subjects.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { GetAllStudentsComponent } from './component/get-all-students/get-all-students.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:"home",component: HomeComponent,
  },
  {
    path:"add-user",component: AddUserComponent,
  },
  {
    path:"get-all-users",component: GetAllUsersComponent,
  },
  {
    path:'edit-user/:username',component: EditUserComponent,
  },
  {
    path:'add-subject' ,component: AddSubjectComponent,
  },
  {
    path:'edit-subject/:id',component: EditSubjectComponent,
  },
  {
    path:'get-all-subjects',component: GetAllSubjectsComponent,
  },
  {
    path:'add-student',component: AddStudentComponent,
  },
  {
    path:'edit-student/:id',component: EditStudentComponent,
  },
  {
    path:'get-all-students',component: GetAllStudentsComponent,
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
