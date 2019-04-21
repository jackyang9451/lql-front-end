import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoFormAddFormComponent } from './add-form/add-form.component';

const routes: Routes = [

  { path: 'add-form', component: AutoFormAddFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoFormRoutingModule { }
