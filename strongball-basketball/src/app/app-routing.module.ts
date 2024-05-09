import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) 
  },
  { 
    path: '', loadChildren: () => import('../app/pages/login/login.module').then(m => m.LoginModule) 
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signUp', loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: 'teams', loadChildren: () => import('./pages/teams/teams.module').then(m => m.TeamsModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
