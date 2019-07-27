import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteUserComponent } from './delete-user.component';

@NgModule({
  declarations: [DeleteUserComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    NgbModule,
  ],
  exports: [DeleteUserComponent]
})
export class DeleteUserModule { }
