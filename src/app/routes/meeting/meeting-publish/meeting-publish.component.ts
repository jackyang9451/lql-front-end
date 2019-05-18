import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { UploadService } from 'app/service/upload.service';
import { InfoService } from 'app/service/Info.service';
import { MeetingBaseInfo } from 'app/interface/MeetingInfo';
import { MeetingService } from 'app/service/meeting.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-meeting-meeting-publish',
  templateUrl: './meeting-publish.component.html',
})
export class MeetingMeetingPublishComponent implements OnInit {
  form: FormGroup;
  submitting = false;

  ngModel;
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
    private fb: FormBuilder,
    private msg: NzMessageService,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadService,
    private infoService: InfoService,
    private meetingService: MeetingService) { }

  ngOnInit() {
    // console.log(this.articleSectionId);
    this.form = this.fb.group({
      meetingName: [null , [Validators.required]],
      meetingDate: [null, [Validators.required]],
      meetingLocation: [null, [Validators.required]],
      meetingCategory: [null],
      meetingSponsor: [null, [Validators.required]],
      meetingContact: [null, [Validators.required]],
      meetingMobile: [null, [Validators.required]],
      meetingEmail: [null, [Validators.email]],
      meetingContent: [null, [Validators.required]]
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
    const exValue: MeetingBaseInfo = this.form.value;
    exValue.meetingDate.map((value: any, index: number) => {
      if (index === 0) {
        exValue.meetingStart = value;
      } else {
        exValue.meetingEnd = value;
      }
      delete exValue.meetingDate;
    });
    this.meetingService.addMeeting(exValue)
    .pipe(
      map((res: any) => res.result),
      switchMap((id: number) => this.meetingService.getMeetingById(id)),
      switchMap((res: any) => this.infoService.getArticleById(res.result.articleId)),
      map((res: any) => res.result),
      switchMap((result: any) => {
        result.articleContent = exValue.meetingContent;
        return this.infoService.modifyArticle(result);
      })
    )
    .subscribe((res: any) => {
      if (res.status === 200) {
        this.msg.success('发布会议成功,请勿重复提交');
        this.form.reset();
        this.submitting = false;
      }
      this.router.navigateByUrl('/');
    });
  }
}
