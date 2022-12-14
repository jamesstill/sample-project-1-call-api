import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void {
    this.service.getUsers().subscribe((r) => this.users = r);
  }

}
