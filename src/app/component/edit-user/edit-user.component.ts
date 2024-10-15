import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{


  constructor(private activatedRoute: ActivatedRoute,private userService: UserService,private router:Router){}
  user:any;
  selectedUser:any;

  firstName: string='';
  lastName: string='';
  password: string='';
  email: string='';
  username: string='';
  role: string='';

  ngOnInit(): void {
   this.getUser();
  }

  getUser() {
    this.selectedUser = this.activatedRoute.snapshot.paramMap.get('username');

    return this.userService
      .getUserByUsername(this.selectedUser)
      .subscribe((response) => {
        this.firstName = response.firstName;
        this.lastName = response.lastName;
        this.username = response.username;
        this.password = response.password;
        this.email = response.email;
        this.role = response.role;
      });
    }

      userUpdate() {
        const user = {
          "firstName": this.firstName,
          "lastName": this.lastName,
          "username": this.username,
          "password": this.password,
          "email": this.email,
          "role": this.role
          };

          this.userService.updateUser(user).subscribe((response) => {
            alert("Update Successful");
            this.router.navigate(['get-all-users']);
          })
        
        }
  

    
  
}
