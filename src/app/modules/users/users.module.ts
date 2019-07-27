import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserCardModule } from './components/user-card/user-card.module';
import { SingleUserModule } from './components/single-user/single-user.module';
import { TitleBarModule } from '../../shared/modules/title-bar/title-bar.module';
import { HeaderModule } from '../../shared/modules/header/header.module';
import { UsersComponent } from './users.component';


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UserCardModule,
    SingleUserModule,
    InfiniteScrollModule,
    TitleBarModule,
    HeaderModule,
    RouterModule.forChild([{
      path: '',
      component: UsersComponent
    }]),
  ]
})
export class UsersModule { }
