import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AdminService } from 'app/service/admin.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { InfoService } from 'app/service/Info.service';

@Component({
  selector: 'app-admin-admin-article',
  templateUrl: './admin-article.component.html',
})
export class AdminAdminArticleComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  res$: Observable<any>;
  loading = false;
  total: number; // 新闻的总数
  currentPageNum = 1; // 初始化为1
  pageSize = 7; // 默认每页的数量

  constructor(
    private adminService: AdminService,
    private router: Router,
    private infoService: InfoService,
    private msg: NzMessageService,
  ) { }

  ngOnInit() {
    this.res$ = this.adminService.getArticlePagination(1).pipe(
      map((res: any) => res.result)
    );
  }

  openEdit(record: any = {}) {
    // 使用非模态框进行操作
    this.router.navigate(['news/edit', record.id]);
  }

  deleteIt(id: any) {
    this.adminService.deleteIt(id)
    .subscribe(
      (res: any) => {
        if ( res.status === 200 ) {
          // 不要使用remove方法 你被骗了 remove是移除全局提醒用的
          this.msg.error('删除成功');
          this.getDataByPage(this.currentPageNum);
        }
      }
    );
  }

  getDataByPage(pageNum: any) {
    console.log(pageNum);
    this.res$ = this.adminService.getArticlePagination(pageNum)
    .pipe( map((res: any) => res.result) ); // 这里要使用map进行处理
  }

}
