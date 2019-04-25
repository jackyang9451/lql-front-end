import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InfoRoutingModule } from './info-routing.module';
import { InfoViewComponent } from './view/view.component';
import { InfoView2Component } from './view2/view2.component';

const COMPONENTS = [
  InfoViewComponent,
  InfoView2Component];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    InfoRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class InfoModule { }
