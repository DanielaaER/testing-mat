import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaComponent } from './media/media.component';
import { MenuComponent } from './menu/menu.component';
import { CorrelationComponent } from './correlation/correlation.component';
import { SimpsonComponent } from './simpson/simpson.component';

const routes: Routes = [
  { path: 'a1', component: MediaComponent },
  { path: 'a3', component: CorrelationComponent },
  { path: 'a5', component: SimpsonComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: MenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
