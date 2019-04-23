import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoViewComponent } from './view/view.component';

const routes: Routes = [

  { path: 'view/:sectionId', component: InfoViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
