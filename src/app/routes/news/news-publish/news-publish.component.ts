import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { ArticleInformation } from '../../../interface/ArticleInformation'
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewsServiceService } from 'app/service/news-service.service';

@Component({
  selector: 'app-news-news-publish',
  templateUrl: './news-publish.component.html',
})
export class NewsNewsPublishComponent implements OnInit {
  form: FormGroup;
  submitting = false;

  // 标签中要使用的变量
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];


  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    private newService: NewsServiceService) { }

  ngOnInit() {
    this.form = this.fb.group({
      articleSectionId: [null, [Validators.required]],
      articleLabels: [null, [Validators.required]],
      articleTitle: [null, [Validators.required]],
      articleContent: [null, [Validators.required]],
    });

    // 初始化标签中的数据
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: '' + i });
    }
    this.listOfOption = children;
  }

  submit() {
    this.submitting = true;
    // 究极开发偷懒方式 直接赋值哇
    this.form.value.userId = 1; // 偷懒没有写用户模块
    this.form.value.articleLabels = '1,2'; // 偷懒不会写标签
    // console.log(this.form.value);
    this.newService.addArticle(this.form.value)
    .subscribe((res: any) => {
      if (res.status === 200) {
        this.msg.success('提交成功,请勿重复提交');
        this.form.reset();
      }
      this.submitting = false;
    });
  }
}
