import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { NewsRoutingModule } from './news-routing.module';
import { NewsNewsPublishComponent } from './news-publish/news-publish.component';
import { NewsNewsManageComponent } from './news-manage/news-manage.component';
import { NewsEditComponent } from './edit/edit.component';
import { NewsNewsViewComponent } from './news-view/news-view.component';
import { NZ_MESSAGE_CONFIG } from 'ng-zorro-antd';

const COMPONENTS = [
  NewsNewsPublishComponent,
  NewsNewsManageComponent,
  NewsEditComponent,
  NewsNewsViewComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    NewsRoutingModule
  ],
  providers: [
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class NewsModule { }
