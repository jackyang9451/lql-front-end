import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsNewsPublishComponent } from './news-publish/news-publish.component';

const routes: Routes = [

  { path: 'news-publish', component: NewsNewsPublishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
