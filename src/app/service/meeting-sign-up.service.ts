import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { MeetingSignUp } from 'app/interface/MeetingSignup';

@Injectable({
  providedIn: 'root'
})
export class MeetingSignUpService {

  constructor(
    private http: _HttpClient
  ) { }

  createMeetingSingUp(meetingSignUp: MeetingSignUp) {
    const optionalUrl = 'lql/meeting-signup';
    return this.http.post(
      optionalUrl,
      meetingSignUp
    );
  }
}
