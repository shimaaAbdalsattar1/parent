import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditUserModule } from '../../../modules/users/components/add-edit-user/add-edit-user.module';
import { TitleBarComponent } from './title-bar.component';

@NgModule({
  declarations: [TitleBarComponent],
  imports: [
    CommonModule,
    AddEditUserModule
  ],
  exports: [TitleBarComponent]
})
export class TitleBarModule { }
