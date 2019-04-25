import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { AdminService } from 'app/service/admin.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { InfoService } from 'app/service/Info.service';
import { ArticleQueryParam } from 'app/interface/ArticleQueryParam';

@Component({
  selector: 'app-admin-admin-article',
  templateUrl: './admin-article.component.html',
})
export class AdminAdminArticleComponent implements OnInit {
  q: any = {
    articleSectionId: '',
  };
  rows: any[];
  total: number;
  loading = false;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private infoService: InfoService,
    private msg: NzMessageService,
  ) { }

  ngOnInit() {
    this.getDataByPage();
  }

  getDataByPage(pageNum = 1) {
    const httpParam = new ArticleQueryParam(this.q.articleSectionId, pageNum);
    this.adminService.getArticlePagination(httpParam)
    // 这里要使用map进行处理
    .pipe( map((res: any) => [ res.result.rows, res.result.total ]) )
    .subscribe(([rows, total]) => {
      this.rows = rows;
      this.total = total;
    });
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
          // this.getDataByPage(this.currentPageNum);
        }
      }
    );
  }


}
