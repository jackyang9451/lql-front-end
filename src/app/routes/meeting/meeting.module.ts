import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MeetingRoutingModule } from './meeting-routing.module';

const COMPONENTS = [];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    MeetingRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class MeetingModule { }
