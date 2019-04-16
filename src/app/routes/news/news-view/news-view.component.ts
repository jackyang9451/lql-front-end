import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { NewsServiceService } from 'app/service/news-service.service';
import { Location } from '@angular/common';
import { STColumn } from '@delon/abc';
import { NzMessageService, NzTabChangeEvent } from 'ng-zorro-antd';

@Component({
  selector: 'app-news-news-view',
  templateUrl: './news-view.component.html',
})
export class NewsNewsViewComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  articleData: any;
  list: any[] = [];
  articleTitle: any;

  data = {
    advancedOperation1: [],
    advancedOperation2: [],
    advancedOperation3: [],
  };

  opColumns: STColumn[] = [
    { title: '操作类型', index: 'type' },
    { title: '操作人', index: 'name' },
    { title: '执行结果', index: 'status', render: 'status' },
    { title: '操作时间', index: 'updatedAt', type: 'date' },
    { title: '备注', index: 'memo', default: '-' },
  ];
  constructor(
    public msg: NzMessageService,
    private http: _HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private newsService: NewsServiceService,
    private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
      this.newsService.getArticleById(this.id)
      .subscribe((res: any) => {
        this.articleData = res.result;
        console.log(res);
      });

      this.http.get('/profile/advanced').subscribe((res: any) => {
        this.data = res;
        this.change({ index: 0, tab: null });
        this.cdr.detectChanges();
      });
    }
    back(value: any) {
      this.location.back();
    }
    change(args: NzTabChangeEvent) {
      this.list = this.data[`advancedOperation${args.index + 1}`];
    }

}
