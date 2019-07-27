import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserModule } from '../add-edit-user/add-edit-user.module';
import { DeleteUserModule } from '../delete-user/delete-user.module';
import { UserCardComponent } from './user-card.component';

@NgModule({
  declarations: [UserCardComponent],
  imports: [
    CommonModule,
    AddEditUserModule,
    DeleteUserModule
  ],
  exports: [UserCardComponent]
})
export class UserCardModule { }
