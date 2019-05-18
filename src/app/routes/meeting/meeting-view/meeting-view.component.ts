import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InfoService } from 'app/service/Info.service';
import { Location } from '@angular/common';
import { MeetingService } from 'app/service/meeting.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-meeting-meeting-view',
  templateUrl: './meeting-view.component.html',
})
export class MeetingMeetingViewComponent implements OnInit {
  id = +this.route.snapshot.paramMap.get('meetingId');
  meetingData: any;
  list: any[] = [];
  meetingItem: any; // 包含会议内容的变量

  constructor(
    public msg: NzMessageService,
    private route: ActivatedRoute,
    private location: Location,
    private meetingSerive: MeetingService,
    private infoService: InfoService,
    private router: Router,
    private cdr: ChangeDetectorRef
    ) { }
    ngOnInit() {
      this.meetingSerive.getMeetingById(this.id)
      .pipe(
        switchMap( (res: any) => {
          this.meetingData = res.result;
          return this.infoService.getArticleById(res.result.articleId);
        }),
        map((res: any) => res.result)
      )
      .subscribe((result: any) => {
        this.meetingItem = {...result, ...this.meetingData};
        console.log(this.meetingItem);
      });
    }
    back(value: any) {
      this.location.back();
    }

    signUp() {
      this.router.navigate(['/meeting/meeting-sign-up/', this.id]);
    }

    viewSignUp() {
      this.router.navigate(['/meeting/viewSignUp/', this.id]);
    }
}
