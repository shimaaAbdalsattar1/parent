import { Component, OnInit } from '@angular/core';
import { UsersManagementService } from './services/users-management.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList: any[] = [];
  private offset = 1;
  public selectedUserID: number = null;
  constructor(
    private usersMangaement: UsersManagementService
  ) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersMangaement.getUsers(this.offset).subscribe(response => {
      let users = response['data'];
      this.usersList = this.usersList.concat(users);
      //debugger;
    });
  }

  onScroll() {
    console.log('scrolled!!');
    this.offset++;
    this.getUsersList();
  }

  showUserDetails(userID) {
    this.clearSelection();
    this.selectedUserID = userID;
  }

  clearSelection() {
    this.selectedUserID = null;
  }

}
