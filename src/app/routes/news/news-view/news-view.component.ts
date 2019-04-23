import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { STColumn } from '@delon/abc';
import { NzMessageService, NzTabChangeEvent } from 'ng-zorro-antd';
import { InfoService } from 'app/service/Info.service';

@Component({
  selector: 'app-news-news-view',
  templateUrl: './news-view.component.html',
})
export class NewsNewsViewComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  articleData: any;
  list: any[] = [];
  articleTitle: any;

  // 评分这里
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;

  constructor(
    public msg: NzMessageService,
    private http: _HttpClient,
    private route: ActivatedRoute,
    private location: Location,
    private infoService: InfoService,
    private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
      this.infoService.getArticleById(this.id)
      .subscribe((res: any) => {
        this.articleData = res.result;
        console.log(res);
      });
    }
    back(value: any) {
      this.location.back();
    }

}
