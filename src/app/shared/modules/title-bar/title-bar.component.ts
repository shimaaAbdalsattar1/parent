import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {
  private isOpenedAddUserModal: Subject<boolean> = new BehaviorSubject(false);
  constructor() { }

  ngOnInit() {
  }

  addNewUser() {
    this.isOpenedAddUserModal.next(true);
  }

}
