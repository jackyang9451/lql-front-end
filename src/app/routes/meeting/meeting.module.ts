import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { MeetingRoutingModule } from './meeting-routing.module';
import { MeetingMeetingSignUpComponent } from './meeting-sign-up/meeting-sign-up.component';
import { MeetingMeetingPublishComponent } from './meeting-publish/meeting-publish.component';
import { MeetingMeetingViewComponent } from './meeting-view/meeting-view.component';
import { MeetingViewSignUpComponent } from './view-sign-up/view-sign-up.component';

const COMPONENTS = [
  MeetingMeetingSignUpComponent,
  MeetingMeetingPublishComponent,
  MeetingMeetingViewComponent,
  MeetingViewSignUpComponent];
const COMPONENTS_NOROUNT = [
];

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
