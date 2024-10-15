import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './component/menu/menu.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { GetAllUsersComponent } from './component/get-all-users/get-all-users.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { AddSubjectComponent } from './component/add-subject/add-subject.component';
import { EditSubjectComponent } from './component/edit-subject/edit-subject.component';

import { GetAllSubjectsComponent } from './component/get-all-subjects/get-all-subjects.component';
import { AddStudentComponent } from './component/add-student/add-student.component';
import { EditStudentComponent } from './component/edit-student/edit-student.component';
import { GetAllStudentsComponent } from './component/get-all-students/get-all-students.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    AddUserComponent,
    GetAllUsersComponent,
    EditUserComponent,
    AddSubjectComponent,
    EditSubjectComponent,
    GetAllSubjectsComponent,
    AddStudentComponent,
    EditStudentComponent,
    GetAllStudentsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
