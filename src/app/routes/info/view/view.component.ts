import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd';
import { InfoService } from 'app/service/Info.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-info-view',
  templateUrl: './view.component.html',
})
export class InfoViewComponent implements OnInit {
  q: any = {
    status: 'all',
  };
  loading = false;
  data: any; // 该类别文章的全体
  total: number; // 新闻的总数
  pageSize = 7;  // 默认一页多少个
  currentPageNum: any; // 当前页数
  articleSectionId: number; // 当前板块的ID
  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private infoService: InfoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    // this.route.paramMap
    // .pipe(
    //   switchMap((params: ParamMap) => {
    //     this.articleSectionId = +params.get('sectionId');
    //     return this.infoService.getInfoNormal(+params.get('sectionId'));
    //   }),
    //   map((res: any) => [res.result.rows, res.result.total])
    // ).subscribe(
    //   ([rows, total]) => {
    //     this.data = rows;
    //     this.total = total;
    //   }
    // );
  }

  // &event 是改变以后的值
  getDataByPage(pageNum: any) {
    // this.infoService.getInfoNormal(this.articleSectionId, undefined, pageNum)
    // .pipe(
    //   map((res: any) => [res.result.rows, res.result.total])
    // )
    // .subscribe( ([rows, total]) => {
    //   this.data = rows;
    //   this.total = total;
    //   this.loading = false;
    //   this.cdr.detectChanges();
    // } );
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
