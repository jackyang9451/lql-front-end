import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAdminArticleComponent } from './admin-article/admin-article.component';

const routes: Routes = [

  { path: 'adminArticle', component: AdminAdminArticleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
