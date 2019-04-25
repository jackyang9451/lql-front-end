import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';
import { AutoFormAddFormEditSomeComponent } from './edit-some/edit-some.component';
import { AutoFormAddFormEditMulitComponent } from './edit-mulit/edit-mulit.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-form-add-form',
  templateUrl: './add-form.component.html',
  styles: [
    `
      .gutter-box {
        padding: 5px 0;
      }
    `
  ]
})
export class AutoFormAddFormComponent implements OnInit {
  loading = false;
  nameDate: any;
  url = `/user`;
  formSchema: SFSchema = {
    properties: {
      // name: {type: 'string', title: 'g'}
    },
    required: []
  };
  // @ViewChild('st') st: STComponent;
  // columns: STColumn[] = [
  //   { title: '编号', index: 'no' },
  //   { title: '调用次数', type: 'number', index: 'callNo' },
  //   { title: '头像', type: 'img', width: '50px', index: 'avatar' },
  //   { title: '时间', type: 'date', index: 'updatedAt' },
  //   {
  //     title: '',
  //     buttons: [
  //        { text: '查看', click: (item: any) => `/form/${item.id}` },
  //        { text: '编辑', type: 'static', component: AutoFormAddFormEditSomeComponent, click: 'reload' },
  //     ]
  //   }
  // ];

  constructor(
    private http: _HttpClient,
    private modal: ModalHelper,
    private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.nameDate = new Date();
  }

  add() {
    console.log(this.nameDate.getTime());
    // this.modal
    //   .createStatic(FormEditComponent, { i: { id: 0 } })
    //   .subscribe(() => this.st.reload());
  }

  /**
   * 添加一个单行文本
   */
  sigleInput() {
    const lableName: string = 'sigleInput' + Math.random();
    // 需要订阅
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = { type: 'string', title: res.title, ui: { placeholder: res.placeholder } };
        this.replaceLable(lableName, res.isRequired);
      });
  }

  /**
   * 添加多行文本
   */
  multiInput() {
    const lableName: string = 'multiInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
           type: 'string',
           title: res.title,
           ui: {
              widget: 'textarea',
              placeholder: res.placeholder,
              autosize: { minRows: 2, maxRows: 6 }
            }
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }

  /**
   * 添加数字
   */
  numberInput() {
    const lableName: string = 'numberInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
           type: 'number',
           title: res.title,
           ui: {
             placeholder: res.placeholder
           }
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }
  /**
   * 手机号输入
   */
  phoneInput() {
    const lableName: string = 'phoneInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
           type: 'string',
           format: 'mobile',
           title: res.title,
           ui: {
             placeholder: res.placeholder
           }
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }
  /**
   * 日期输入
   */
  dataInput() {
    const lableName: string = 'dataInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
          type: 'string',
          format: 'date',
          title: res.title
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }
  /**
   * 上传文件
   */
  fileInput() {
    const lableName: string = 'fileInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditSomeComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
           type: 'number',
           title: res.title,
           ui: {
             widget: 'upload',
             action: '/file', // 上传文件的接口
             resReName: 'resource_id',
           }
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }
  /**
   * 单项选择
   */
  checkboxInput() {
    const lableName: string = 'checkboxInput' + Math.random();
    this.modal.createStatic(AutoFormAddFormEditMulitComponent)
    .subscribe(
      (res: any) => {
        this.loading = true;
        // 添加title
        this.formSchema.properties._rep = {
           type: 'string',
           title: res.title,
           enum: res.item
          };
        this.replaceLable(lableName, res.isRequired);
      });
  }

  /**
   * 替换lable的名字
   */
  replaceLable(lableName: string, isRequired: boolean) {
    const text = JSON.stringify(this.formSchema).replace(/_rep/g, lableName);
    this.formSchema = JSON.parse(text);
        // 添加必选
    if (isRequired) {
      this.formSchema.required = [ ...this.formSchema.required, lableName ];
    }
  }
  /**
   * 测试填写
   */
  formTest() {
    this.router.navigate(['/auto-form/form-test', { i: JSON.stringify(this.formSchema) }]);
  }

}
