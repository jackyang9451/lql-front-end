import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { NewsServiceService } from 'app/service/news-service.service';

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

  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private newsSerivce: NewsServiceService
  ) {}

  ngOnInit() {
    this.getDataByPage(1);
  }

  getData() {
    this.loading = true;
    this.newsSerivce.getArticleAll().subscribe((res: any) => {
      this.data = res.rows;
      this.total = res.total;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  getDataByPage(pageNum: any) {
    this.newsSerivce.getArticlePagination(pageNum, this.pageSize)
    .subscribe((res: any) => {
      this.data = res.rows;
      this.total = res.total;
      this.loading = false;
      this.cdr.detectChanges();
    });
  }
  openEdit(record: any = {}) {
    // 使用非模态框进行操作
    this.router.navigate(['news/edit', record.id]);
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

}
