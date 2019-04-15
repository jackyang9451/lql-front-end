import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NewsRoutingModule } from './news-routing.module';
import { NewsNewsPublishComponent } from './news-publish/news-publish.component';
import { NewsNewsManageComponent } from './news-manage/news-manage.component';
import { NewsEditComponent } from './edit/edit.component';

const COMPONENTS = [
  NewsNewsPublishComponent,
  NewsNewsManageComponent,
  NewsEditComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class NewsModule { }
