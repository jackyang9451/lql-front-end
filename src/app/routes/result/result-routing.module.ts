import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultSuccessComponent } from './success/success.component';
import { ResultFailComponent } from './fail/fail.component';

const routes: Routes = [

  { path: 'success', component: ResultSuccessComponent },
  { path: 'fail', component: ResultFailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultRoutingModule { }
