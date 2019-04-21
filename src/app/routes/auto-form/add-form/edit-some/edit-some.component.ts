import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';

@Component({
  selector: 'app-auto-form-add-form-edit-some',
  templateUrl: './edit-some.component.html',
})
export class AutoFormAddFormEditSomeComponent implements OnInit {
  @Input()
  i: any;
  schema: SFSchema = {
    properties: {
      title: { type: 'string', title: '字段标题' },
      placeholder: { type: 'string', title: '字段描述' },
      isRequired: { type: 'boolean', title: '是否必填', default: false},
    },
    required: ['title', 'placeholder', 'isRequired'],
  };

  constructor(
    private modal: NzModalRef,
    private msgSrv: NzMessageService,
  ) {}

  ngOnInit(): void {
    // if (this.record.id > 0)
    // this.http.get(`/user/${this.record.id}`).subscribe(res => (this.i = res));
  }

  save(value: any) {
    // this.http.post(`/user/${this.record.id}`, value).subscribe(res => {
    //   this.msgSrv.success('保存成功');
      this.modal.close(value);
    // });
  }

  close() {
    this.modal.destroy();
  }
}
