import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import ('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then ((m) => m.AuthModule), //rota para o auth
  },
  {
    path:'**',
    component: NotFoundComponent,     //Esse "path geralmente é o último, visto ser a última possibilidade"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
