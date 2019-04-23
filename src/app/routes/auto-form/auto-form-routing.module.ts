import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutoFormAddFormComponent } from './add-form/add-form.component';
import { AutoFormFormTestComponent } from './form-test/form-test.component';

const routes: Routes = [

  { path: 'add-form', component: AutoFormAddFormComponent },
  { path: 'form-test', component: AutoFormFormTestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoFormRoutingModule { }
