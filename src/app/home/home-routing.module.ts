import { TvDetailComponent } from './tv-detail/tv-detail.component';
import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/authlogin']);

const routes: Routes = [//a ordem das rotas importam!
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'perfil',
    component: ProfileComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path:'movie/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'tv/:id',
    component: TvDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
