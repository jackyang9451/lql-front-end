import { Injectable } from '@angular/core';
import { MeetingBaseInfo } from 'app/interface/MeetingInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  baseUrl = 'http://10.0.78.214:8888/';
  constructor(
    private http: HttpClient,
  ) { }

  /////////////////////// GET请求 ////////////////////
  /////////////////////// POST请求 ////////////////////
  addMeeting(meeting: MeetingBaseInfo) {
    const optionalURL = 'lql/meeting';
    const url = `${this.baseUrl}${optionalURL}`;
    return this.http.post(url, meeting);
  }
  /////////////////////// GET请求 ////////////////////
}
