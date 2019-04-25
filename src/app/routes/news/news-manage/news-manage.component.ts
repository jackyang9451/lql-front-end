import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { InfoService } from 'app/service/Info.service';

@Component({
  selector: 'app-news-news-manage',
  templateUrl: './news-manage.component.html',
})
export class NewsNewsManageComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  loading = false;
  data: any[] = []; // 新闻的全体
  total: number; // 新闻的总数
  pageSize = 7;     // 默认每页的数量
  currentPageNum = 1; // 这里需要初始化为1 可能是个BUG

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private infoService: InfoService
  ) {}

  ngOnInit() {
    this.getDataByPage(1);
  }

  getData() {
    this.loading = true;
    this.infoService.getArticleAll().subscribe((res: any) => {
      this.data = res.rows;
      this.total = res.total;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  // &event 是改变以后的值
  getDataByPage(pageNum: any) {
    this.infoService.getArticlePagination(pageNum, this.pageSize)
    .subscribe( (res: any) => {
      this.data = res.result.rows;
      this.total = res.result.total;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  openEdit(record: any = {}) {
    // 使用非模态框进行操作
    this.router.navigate(['news/edit', record.id]);

    // 使用modal进行操作
    // this.modal
    //   .create(NewsNewsManageEditComponent, { record }, { size: 'md' })
    //   .subscribe(res => {
    //     if (record.id) {
    //       record = Object.assign(record, { id: 'mock_id', percent: 0 }, res);
    //     } else {
    //       this.data.splice(0, 0, res);
    //       this.data = [...this.data];
    //     }
    //     this.cdr.detectChanges();
    //   });
  }

  deleteIt(id: any) {
    console.log(this.currentPageNum);
    this.infoService.deleteArticle(id)
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

}
