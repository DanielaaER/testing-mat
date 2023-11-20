import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A1Component } from './a1/a1.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'a1', component: A1Component },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
