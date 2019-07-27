import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    children: [
      // auth module
      { path: 'login', loadChildren: './core/login/login.module#LoginModule' },
      // users module
      { path: 'users', loadChildren: './modules/users/users.module#UsersModule' }

    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { useHash: false, enableTracing: false}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
