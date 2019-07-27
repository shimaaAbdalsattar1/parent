import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserModule } from '../add-edit-user/add-edit-user.module';
import { DeleteUserModule } from '../delete-user/delete-user.module';
import { SingleUserComponent } from './single-user.component';

@NgModule({
  declarations: [SingleUserComponent],
  imports: [
    CommonModule,
    AddEditUserModule,
    DeleteUserModule
  ],
  exports: [SingleUserComponent]
})
export class SingleUserModule { }
