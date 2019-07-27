import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { UsersManagementService } from '../../services/users-management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {
  @ViewChild('modalElem') modalElem;
  @Input() isopened: Subject<boolean>;
  @Input() edittedUserData?: any;
  private modalRef: NgbModalRef;
  public user: { name: string, job: string } = { name: null, job: null };
  constructor(
    private modalService: NgbModal,
    private manageUsers: UsersManagementService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.openModal();
  }

  initializeModal() {
    this.user = { name: null, job: null };
    if (this.edittedUserData) { // Edit mode
      this.user.name = this.edittedUserData.first_name + ' ' + this.edittedUserData.last_name;
    }
  }

  openModal() {
    this.isopened.subscribe((val) => {
      if (val) {
        this.initializeModal();
        this.modalRef = this.modalService.open(this.modalElem, {
          backdrop: 'static',
          windowClass: ''
        });
      }
    });
  }

  closeModal() {
    this.modalRef.dismiss();
  }

  submitForm() {
    if (this.edittedUserData) {
      // Edit mode
      this.manageUsers.updateUser(this.edittedUserData.id, this.user).subscribe(response => {
        this.confirmSaving(response['updatedAt'].split('T')[0]);
      });
    }
    else {
      // Add new user
      this.manageUsers.createNewUser(this.user).subscribe(response => {
        this.confirmSaving(response['createdAt'].split('T')[0]);
      });
    }
  }

  confirmSaving(msg) {
    this.toastr.success(msg, 'User saved successfuly at');
    this.closeModal();
  }

}
