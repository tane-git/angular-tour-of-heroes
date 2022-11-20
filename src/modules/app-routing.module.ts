import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  DashboardComponent,
  HeroDetailComponent,
  HeroesComponent,
} from 'src/components';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
