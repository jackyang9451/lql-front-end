import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingMeetingSignUpComponent } from './meeting-sign-up/meeting-sign-up.component';
import { MeetingMeetingPublishComponent } from './meeting-publish/meeting-publish.component';

const COMPONENTS = [
  MeetingMeetingSignUpComponent,
  MeetingMeetingPublishComponent];
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
