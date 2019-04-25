import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoViewComponent } from './view/view.component';
import { InfoView2Component } from './view2/view2.component';

const routes: Routes = [

  // { path: 'view/:sectionId', component: InfoViewComponent },
  // { path: 'view2/:sectionId', component: InfoView2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoRoutingModule { }
