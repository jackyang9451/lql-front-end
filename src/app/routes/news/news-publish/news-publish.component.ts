import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpHeaders, HttpClient } from '@angular/common/http';
// import { ArticleInformation } from '../../../interface/ArticleInformation'
import { NzMessageService } from 'ng-zorro-antd';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    private cdr: ChangeDetectorRef) { }

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
    console.log(this.form.value);

  }

  test(value) {
    console.log(value);
  }
}
