import { Injectable } from '@angular/core';
import { MeetingBaseInfo } from 'app/interface/MeetingInfo';
import { HttpClient } from '@angular/common/http';
import { MeetingQueryParam } from 'app/interface/MeetingQueryParam';
import { _HttpClient } from '@delon/theme';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {
  constructor(
    private http: _HttpClient,
  ) { }

  /////////////////////// GET请求 ////////////////////
  getMeetingById(id: number) {
    const optionalURL = `lql/meeting/${id}`;
    return this.http.get(optionalURL);
  }
  /////////////////////// POST请求 ////////////////////
  /**
   * 新建会议
   */
  addMeeting(meeting: MeetingBaseInfo) {
    const optionalURL = 'lql/meeting';
    return this.http.post(optionalURL, meeting);
  }
  /////////////////////// GET请求 ////////////////////
  /**
   * 根据articleSectionId查询指定板块的信息 分页查询
   */

  getMeetingNormal(param: MeetingQueryParam) {
    const optionalUrl = 'lql/meeting';
    console.log(param);
    return this.http.get(
      optionalUrl,
      param
    );
  }

  /**
   * 根据articleId查询指定记录 获取meeting的Id
   */
  getIdByArticleId(articleId: number) {
    const optionalURL = 'lql/meeting';
    return this.http.get(
      optionalURL,
      {
        articleId
      }
    );
  }
}
