import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AddEditUserComponent } from './add-edit-user.component';

@NgModule({
  declarations: [AddEditUserComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    NgbModule,
    FormsModule
  ],
  exports: [AddEditUserComponent]
})
export class AddEditUserModule { }
