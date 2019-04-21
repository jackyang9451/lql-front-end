import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-meeting-sign-up',
  templateUrl: './meeting-sign-up.component.html',
})
export class MeetingMeetingSignUpComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  loading = false;
  data: any[] = []; // 新闻的全体
  total: number; // 新闻的总数
  pageSize = 7;     // 默认每页的数量
  currentPageNum = 1;

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
  ) {}

  ngOnInit() {
    this.getDataByPage(1);
  }

  // getData() {
  //   this.loading = true;
  //   this.newsSerivce.getArticleAll().subscribe((res: any) => {
  //     this.data = res.rows;
  //     this.total = res.total;
  //     this.loading = false;
  //     this.cdr.detectChanges();
  //   });
  // }
  // &event 是改变以后的值
  getDataByPage(pageNum: any) {
    // this.newsSerivce.getArticlePagination(pageNum, this.pageSize)
    // .subscribe((res: any) => {
    //   this.data = res.result.rows;
    //   this.total = res.result.total;
    //   this.loading = false;
    //   this.cdr.detectChanges();
    // });
  }
  openEdit(record: any = {}) {
    // 使用非模态框进行操作
    this.router.navigate(['news/edit', record.id]);
  }

  deleteIt(id: any) {
    // console.log(this.currentPageNum);
    // this.newsSerivce.deleteArticle(id)
    // .subscribe(
    //   (res: any) => {
    //     if ( res.status === 200 ) {
    //       // 不要使用remove方法 你被骗了 remove是移除全局提醒用的
    //       this.msg.error('删除成功');
    //       this.getDataByPage(this.currentPageNum);

    //     }
    //   }
    // );
  }

}
