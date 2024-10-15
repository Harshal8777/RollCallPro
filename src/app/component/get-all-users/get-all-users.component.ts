import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  constructor(private userService: UserService,private router: Router,private cdr: ChangeDetectorRef) { }
  users:any;

  ngOnInit(): void {
    this.getAllUsers();
  }
 
  getAllUsers()
  {
   return  this.userService.getAllUsers().subscribe((response) => {this.users = response;});
   
  }

  deleteUser(username: any) {
    this.userService.deleteUser(username).subscribe((response) =>{
     this.getAllUsers();
     
      alert("Deleted Successfully")
    })
    }

}
