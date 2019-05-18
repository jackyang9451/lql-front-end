import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MeetingSignUpService } from 'app/service/meeting-sign-up.service';
import { MeetingSignUp } from 'app/interface/MeetingSignUp';

@Component({
  selector: 'app-meeting-meeting-sign-up',
  templateUrl: './meeting-sign-up.component.html',
})
export class MeetingMeetingSignUpComponent implements OnInit {
  meetingId = this.route.snapshot.paramMap.get('meetingId');
  form: FormGroup;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private meetingSignUpService: MeetingSignUpService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      signUpName: [null , [Validators.required]],
      signUpSex: [null, [Validators.required]],
      signUpLoction: [null, [Validators.required]],
      signUpNumber: [null, [Validators.required]],
      signUpPost: [null, [Validators.required]],
      signUpDidafangshi: [],
      signUpDidashijian: [],
      signUpLihuishijian: [],
      signUpLihuifangshi: [],
      signUpRemark: []
    });
  }

  submit() {
    this.submitting = true;
    const meetingSignUp: MeetingSignUp =  this.form.value;
    meetingSignUp.meetingId = this.meetingId;
    this.meetingSignUpService.createMeetingSingUp(meetingSignUp)
    .subscribe((res: any) => {
      if (res.status === 200) {
        this.msg.info('提交成功,请勿重复提交');
        this.router.navigate(['/result/success']);
      }
      this.submitting = false;
    }
    );
  }

}
