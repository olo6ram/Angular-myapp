import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowNewUser = false;
  userCreationStatus = "No user was created";
  userName = "";
  constructor() { 
    setTimeout(()=>{
      this.allowNewUser = true;
    },5000);
  }
  onCreateUser(){

  }
  ngOnInit() {
  }

}
