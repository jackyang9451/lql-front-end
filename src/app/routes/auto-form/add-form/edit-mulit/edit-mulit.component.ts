import { Component, OnInit, ViewChild } from '@angular/core';
import { NzModalRef, NzMessageService } from 'ng-zorro-antd';
import { _HttpClient } from '@delon/theme';
import { SFSchema, SFUISchema } from '@delon/form';
import { FormBuilder, AbstractControl, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auto-form-add-form-edit-mulit',
  templateUrl: './edit-mulit.component.html',
  styles: [
    `
      .dynamic-delete-button {
        cursor: pointer;
        position: relative;
        top: 4px;
        font-size: 24px;
        color: #999;
        transition: all 0.3s;
      }

      .dynamic-delete-button:hover {
        color: #777;
      }

      [nz-form] {
        max-width: 600px;
      }
    `
  ]
})
export class AutoFormAddFormEditMulitComponent implements OnInit {
  schema: SFSchema = {
    properties: {
      title: { type: 'string', title: '字段标题' },
      placeholder: { type: 'string', title: '字段描述' },
      isRequired: { type: 'boolean', title: '是否必填', default: false},
    },
    required: ['title', 'placeholder', 'isRequired'],
  };
  validateForm: FormGroup;
  controlArray: Array<{ id: number; controlInstance: string }> = [];

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.controlArray.length > 0 ? this.controlArray[this.controlArray.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `item${id}`
    };
    const index = this.controlArray.push(control);
    console.log(this.controlArray[this.controlArray.length - 1]);
    this.validateForm.addControl(
      this.controlArray[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.controlArray.length > 1) {
      const index = this.controlArray.indexOf(i);
      this.controlArray.splice(index, 1);
      console.log(this.controlArray);
      this.validateForm.removeControl(i.controlInstance);
    }
  }

  getFormControl(name: string): AbstractControl {
    return this.validateForm.controls[name];
  }

  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }
  //   console.log(this.validateForm.value);
  // }

  constructor(
    private fb: FormBuilder,
    private modal: NzModalRef) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({});
    this.addField();
  }

  save(value: any) {
    let arr = [];
// tslint:disable-next-line: forin
    for (const i in Object.values(this.validateForm.value)) {
      const o: {label: any, value: any } = {label: Object.values(this.validateForm.value)[i], value: i };
      arr = [...arr, o];
    }
    value.item = arr;
    console.log(value);
    this.modal.close(value);
    }
  close() {
    this.modal.destroy();
  }
}
