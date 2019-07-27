import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { UsersManagementService } from '../../services/users-management.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {
  @ViewChild('modalElem') modalElem;
  @Input() isopened: Subject<boolean>;
  @Input() deletedUserData: any;
  private modalRef: NgbModalRef;
  constructor(
    private modalService: NgbModal,
    private manageUsers: UsersManagementService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    this.isopened.subscribe((val) => {
      if (val) {
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

  deleteUser() {
    this.manageUsers.deleteUser(this.deletedUserData.id).subscribe(response => {
      this.confirmDeleting();
    });
  }

  confirmDeleting() {
    this.toastr.success('User deleted successfuly');
    this.closeModal();
  }

}
