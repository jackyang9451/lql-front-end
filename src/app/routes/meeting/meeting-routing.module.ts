import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingMeetingSignUpComponent } from './meeting-sign-up/meeting-sign-up.component';
import { MeetingMeetingPublishComponent } from './meeting-publish/meeting-publish.component';
import { MeetingMeetingViewComponent } from './meeting-view/meeting-view.component';
import { MeetingViewSignUpComponent } from './view-sign-up/view-sign-up.component';
const routes: Routes = [

  { path: 'meeting-sign-up/:meetingId', component: MeetingMeetingSignUpComponent },
  { path: 'meeting-publish', component: MeetingMeetingPublishComponent }
,
  { path: 'meeting-view/:meetingId', component: MeetingMeetingViewComponent },
  { path: 'viewSignUp/:meetingId', component: MeetingViewSignUpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
