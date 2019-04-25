import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InfoService } from 'app/service/Info.service';

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
   // tinymce自定义化配置
   config = {
    file_picker_callback: (callback, value, meta) => {
      // Provide image and alt text for the image dialog
      if (meta.filetype === 'image') {
        this.uploadService.uploadImage(callback);
      }
      // Provide alternative source and posted for the media dialog
      if (meta.filetype === 'media') {
        this.uploadService.uploadMedia(callback);
      }
      // Provide file and text for the link dialog
      if (meta.filetype === 'file') {
        this.uploadService.uploadFile(callback);
      }
    },
    file_picker_types: 'file image media',
    // images_upload_handler:  (blobInfo, success, failure) => {
    //   console.log(blobInfo.blob().name);
    //   const formData = new FormData();
    //   formData.append('file', blobInfo.blob(), blobInfo.blob().name);
    //   this.http.post('', formData)
    //   .subscribe((res: any) => {
    //     if (res.status === 200) {
    //       success(res.laction);
    //     }
    //   });
    // }
  };
  article: any;
  uploadService: any;
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    private infoService: InfoService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // console.log(this.param.id);
    this.infoService.getArticleById(this.id)
    .subscribe((res: any) => {
      this.updateName(res.result);
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
      articleSectionId: '' + value.articleSectionId,  // 这里是什么蛇皮操作, 为什么变成字符串就可以卧槽
      articleLabels: value.articleLabels,
      articleTitle: value.articleTitle,
      articleContent: value.articleContent
    });
  }

  // 表单提交
  submit() {
    this.submitting = true;
    // 究极开发偷懒方式 直接赋值哇
    this.form.value.userId = 1; // 偷懒没有写用户模块
    this.form.value.articleLabels = '1,2'; // 偷懒不会写标签
    this.form.value.id = this.id;
    console.log(this.form.value);
    this.infoService.modifyArticle(this.form.value)
    .subscribe((res: any) => {
      console.log(res);
      if (res.status === 200) {
        this.msgSrv.success('修改成功');
      }
      this.submitting = false;
    });

  }
}
