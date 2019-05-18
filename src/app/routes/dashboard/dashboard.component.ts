import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ArticleQueryParam } from 'app/interface/ArticleQueryParam';
import { InfoService } from 'app/service/Info.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeetingService } from 'app/service/meeting.service';
import { MeetingQueryParam } from 'app/interface/MeetingQueryParam';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  urls = ['assets/image/001.jpg', 'assets/image/002.jpg', 'assets/image/003.jpg'];
  list1: any[];
  list2: any[];
  list3: any[];
  list4: any[];
  list5: any[];
  list6: any[];
  // data = [
  //   '关于举办“改革创新 奋发有为”大讨论先进典型报告会的通知',
  //   '关于4月20日、21日停课通知',
  //   '中北大学朔州校区非事业编制用工招聘公告',
  //   '关于开展第七届全国道德模范推荐工作的通知',
  //   '关于组织申报2019年度陆军装备预研专用技术项目的通知'
  // ];
  // fileData = [
  //   '文件1',
  //   '文件2',
  //   '文件3',
  //   '文件1',
  //   '文件2',
  //   '文件3',
  // ];
  constructor(
    private router: Router,
    public msg: NzMessageService,
    private infoService: InfoService,
    private meetingService: MeetingService
  ) { }

  ngOnInit() {
    this.msg.info('欢迎');
    this.getData();
  }
  getData() {
    const httpParam1 = new ArticleQueryParam(1, 1, 5);
    const httpParam2 = new ArticleQueryParam(2, 1, 5);
    const httpParam3 = new ArticleQueryParam(3, 1, 5);
    const httpParam4 = new ArticleQueryParam(4, 1, 5);
    const httpParam5 = new MeetingQueryParam(1, 5);
    const httpParam6 = new ArticleQueryParam(6, 1, 5);

    zip(
      this.infoService.getInfoNormal(httpParam1),
      this.infoService.getInfoNormal(httpParam2),
      this.infoService.getInfoNormal(httpParam3),
      this.infoService.getInfoNormal(httpParam4),
      this.meetingService.getMeetingNormal(httpParam5),
      this.infoService.getInfoNormal(httpParam6),
    )
      .pipe(
        map(( [res1, res2, res3, res4, res5, res6]: any[] ) => [
          res1.result.rows,
          res2.result.rows,
          res3.result.rows,
          res4.result.rows,
          res5.result.rows,
          res6.result.rows,
        ])
      )
      .subscribe(
        ( [list1, list2, list3, list4, list5, list6] ) => {
          this.list1 = list1;
          this.list2 = list2;
          this.list3 = list3;
          this.list4 = list4;
          this.list5 = list5;
          this.list6 = list6;
        }
      );
  }
  to1() {
    this.router.navigate(['/info/view2/', 1]);
  }
  to2() {
    this.router.navigate(['/info/view2/', 2]);
  }
  to3() {
    this.router.navigate(['/info/view2/', 3]);
  }
  to4() {
    this.router.navigate(['/info/view2/', 4]);
  }
  to5() {
    this.router.navigate(['/info/view2/', 5]);
  }
  to6() {
    this.router.navigate(['/info/view2/', 6]);
  }

}
