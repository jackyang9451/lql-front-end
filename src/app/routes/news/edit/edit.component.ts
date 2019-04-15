import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewsServiceService } from 'app/service/news-service.service';

@Component({
  selector: 'app-news-edit',
  templateUrl: './edit.component.html',
})
export class NewsEditComponent implements OnInit {
  form: FormGroup;
  submitting = false;
  data: any;

  // 标签中要使用的变量
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];
  // 传过来的文章ID
  id = this.route.snapshot.paramMap.get('id');

  article: any;
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private newService: NewsServiceService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // console.log(this.param.id);
    this.newService.getArticleById(this.id)
    .subscribe(res => {
      this.updateName(res);
    });

    this.form = this.fb.group({
      articleSectionId: ['', [Validators.required]],
      articleLabels: ['', [Validators.required]],
      articleTitle: ['', [Validators.required]],
      articleContent: ['', [Validators.required]],
    });

    // 初始化标签中的数据
    const children: Array<{ label: string; value: string }> = [];
    for (let i = 10; i < 36; i++) {
      children.push({ label: i.toString(36) + i, value: '' + i });
    }
    this.listOfOption = children;
  }
  /**
   * 订阅一个新的值
   */
  updateName(value: any) {
    this.form.setValue({
      articleSectionId: '' + value.articleSectionId,  // 这里是什么蛇皮操作, 为什么变成字符串
      articleLabels: value.articleLabels,
      articleTitle: value.articleTitle,
      articleContent: value.articleContent
    });
  }

  save(value: any) {
    // this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
    //   this.msgSrv.success('保存成功');
    //   this.modal.close(true);
    // });
  }

  // 表单提交
  submit() {
    console.log(this.form.value);

  }
}
