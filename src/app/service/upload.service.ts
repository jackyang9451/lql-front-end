import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { tap, map, last, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd';



@Injectable({
  providedIn: 'root'
})
export class UploadService {
  baseUrl = 'http://10.0.78.30:8888/';
  optionalUrl = 'file';
  url = 'http://10.0.78.30:8888/file ';


  constructor(
    private http: HttpClient,
    private nzMsg: NzMessageService) { }

  /**
   * 上传图片
   */
  uploadImage(cb: any) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');

    input.addEventListener('change', () => {
      const file = input.files[0];
      const formData = new FormData();
      console.log(file.name);
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', this.url, formData, {
        reportProgress: true
      });
      this.http.request(req)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.nzMsg.loading(`上传中.........${percentDone}%`);
        } else if (event instanceof HttpResponse) {
          this.nzMsg.success('完成');
          cb(event.body.result);
        }
      }
      );
    });
    input.click();
  }

  /**
   * 上传视频
   */
  uploadMedia(cb: any) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'video/*');

    input.addEventListener('change', () => {
      const file = input.files[0];
      const formData = new FormData();
      console.log(file.name);
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', this.url, formData, {
        reportProgress: true
      });
      this.http.request(req)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.nzMsg.loading(`上传中.........${percentDone}%`);
        } else if (event instanceof HttpResponse) {
          this.nzMsg.success('完成');
          cb(event.body.result);
        }
      }
      );
    });
    input.click();
  }

  /**
   * 上传文件 用来上传各种文档
   */
  uploadFile(cb: any) {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');

    input.addEventListener('change', () => {
      const file = input.files[0];
      const formData = new FormData();
      console.log(file.name);
      formData.append('file', file, file.name);
      const req = new HttpRequest('POST', this.url, formData, {
        reportProgress: true
      });
      this.http.request(req)
      .subscribe((event: any) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event.loaded / event.total);
          this.nzMsg.loading(`上传中.........${percentDone}%`);
        } else if (event instanceof HttpResponse) {
          this.nzMsg.success('完成');
          cb(event.body.result);
        }
      }
      );
    });
    input.click();
  }
}
