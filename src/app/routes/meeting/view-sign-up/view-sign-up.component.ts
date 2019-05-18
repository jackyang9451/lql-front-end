import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { STColumn, STReq, STRes } from '@delon/abc';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meeting-view-sign-up',
  templateUrl: './view-sign-up.component.html',
})
export class MeetingViewSignUpComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('meetingId');
  url = 'lql/meeting-signup';
  req: STReq = {
    reName: {
      pi: 'pageNum',
      ps: 'pageSize'
    },
    params: {
      meetingId: this.id,
      sortField: 'id',
      sortOrder: 'descend'
    }
  };
  res: STRes = {
    reName: {
      total: 'result.total',
      list: 'result.rows'
    }
  };
  columns: STColumn[] = [
    { title: '人员姓名 ', index: 'signUpName' },
    { title: '性别', index: 'signUpSex' },
    { title: '工作单位', index: 'signUpLoction' },
    { title: '手机号码', index: 'signUpNumber' },
    { title: '职务', index: 'signUpPost' },
    { title: '抵达方式', index: 'signUpDidafangshi' },
    { title: '抵达时间', type: 'date', index: 'signUpDidashijian' },
    { title: '离会时间', type: 'date', index: 'signUpLihuishijian' },
    { title: '离会方式', index: 'signUpLihuifangshi' },
    { title: '备注', index: 'signUpRemark' }
  ];
  constructor(
    private http: _HttpClient,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() { }

}
