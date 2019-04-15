import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DataShareRoutingModule } from './data-share-routing.module';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DataShareRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DataShareModule { }
