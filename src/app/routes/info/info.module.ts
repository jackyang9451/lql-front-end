import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { InfoRoutingModule } from './info-routing.module';
import { InfoViewComponent } from './view/view.component';

const COMPONENTS = [
  InfoViewComponent];
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
