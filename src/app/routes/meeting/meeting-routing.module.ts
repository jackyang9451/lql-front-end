import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingMeetingSignUpComponent } from './meeting-sign-up/meeting-sign-up.component';
import { MeetingMeetingPublishComponent } from './meeting-publish/meeting-publish.component';

const routes: Routes = [

  { path: 'meeting-sign-up', component: MeetingMeetingSignUpComponent },
  { path: 'meeting-publish', component: MeetingMeetingPublishComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingRoutingModule { }
