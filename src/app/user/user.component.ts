import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userId:number = 100;
  userStatus:string = "online";
  getUserStatus(){
    return this.userStatus;
  }

  constructor() { }

  ngOnInit() {
  }

}
