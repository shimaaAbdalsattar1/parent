import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userInfo: any;
  @Output() userSelected: EventEmitter<number> = new EventEmitter();
  private isOpenedEditModal: Subject<boolean> = new BehaviorSubject(false);
  private isOpenedDeleteModal: Subject<boolean> = new BehaviorSubject(false);
  constructor() { }

  ngOnInit() {
  }

  editUser() {
    this.isOpenedEditModal.next(true);
  }

  deleteUser() {
    this.isOpenedDeleteModal.next(true);
  }

  selectUser() {
    this.userSelected.emit(this.userInfo.id);
  }

}
