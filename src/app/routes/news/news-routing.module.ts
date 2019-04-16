import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsNewsPublishComponent } from './news-publish/news-publish.component';
import { NewsNewsManageComponent } from './news-manage/news-manage.component';
import { NewsEditComponent } from './edit/edit.component';
import { NewsNewsViewComponent } from './news-view/news-view.component';

const routes: Routes = [

  { path: 'news-publish', component: NewsNewsPublishComponent },
  { path: 'news-manage', component: NewsNewsManageComponent },
  { path: 'edit/:id', component: NewsEditComponent },
  { path: 'news-view/:id', component: NewsNewsViewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
