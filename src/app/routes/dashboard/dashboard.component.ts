import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  urls = [ 'assets/image/001.jpg', 'assets/image/002.jpg', 'assets/image/003.jpg' ];
  data = [
    '关于举办“改革创新 奋发有为”大讨论先进典型报告会的通知',
    '关于4月20日、21日停课通知',
    '中北大学朔州校区非事业编制用工招聘公告',
    '关于开展第七届全国道德模范推荐工作的通知',
    '关于组织申报2019年度陆军装备预研专用技术项目的通知'
  ];
  fileData = [
    '文件1',
    '文件2',
    '文件3',
    '文件1',
    '文件2',
    '文件3',
  ];
  constructor(
    private http: _HttpClient,
    private router: Router,
    public msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  to() {
    console.log(111111111);
    this.router.navigate(['/news/news-manage']);
  }

}
