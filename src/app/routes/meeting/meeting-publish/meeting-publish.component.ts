import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from 'app/service/upload.service';
import { NewsServiceService } from 'app/service/news-service.service';

@Component({
  selector: 'app-meeting-meeting-publish',
  templateUrl: './meeting-publish.component.html',
})
export class MeetingMeetingPublishComponent implements OnInit {
  form: FormGroup;
  submitting = false;

  // // 路由传来的参数
  // articleSectionId = this.route.snapshot.queryParamMap.get('articleSectionId');
  // 标签中要使用的变量
  listOfOption: Array<{ label: string; value: string }> = [];
  listOfTagOptions = [];

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

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private msg: NzMessageService,
    private newService: NewsServiceService,
    private route: ActivatedRoute,
    private uploadService: UploadService) { }

  ngOnInit() {
    // console.log(this.articleSectionId);
    this.form = this.fb.group({
      articleSectionId: [1, [Validators.required]],
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
  /**
   * 选择要使用的表单
   */
  select(articleSectionId: any) {
    console.log(articleSectionId);
  }

  submit() {
    this.submitting = true;
    // 究极开发偷懒方式 直接赋值哇
    this.form.value.userId = 1; // 偷懒没有写用户模块
    this.form.value.articleLabels = '1,2'; // 偷懒不会写标签
    console.log(this.form.value);
    this.newService.addArticle(this.form.value)
    .subscribe((res: any) => {
      if (res.status === 200) {
        this.msg.success('提交成功,请勿重复提交');
        this.form.reset();
        this.submitting = false;
      }
    });
  }
}
