import { Component } from '@angular/core';

import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
firstName: string='';
lastName: string='';
password: string='';
email: string='';
username: string='';
role:string='';

constructor(private userService:UserService){}

addUser() {
  this.userService.addUser(this.firstName,this.lastName,this.password,
    this.email,this.role,this.username).subscribe((response) => {alert("registration Successful")}) ;

    this.resetForm();

 
}
resetForm() {
  this.firstName = '';
  this.lastName = '';
  this.password = '';
  this.email = '';
  this.role = '';
  this.username = '';
}

}
