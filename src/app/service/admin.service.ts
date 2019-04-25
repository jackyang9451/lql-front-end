import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ArticleQueryParam } from 'app/interface/ArticleQueryParam';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: _HttpClient
  ) { }
  /**
   * 获取所有文章
   */
  getAllArticle() {
    return this.http.get(
      'lql/article'
    );
  }
  /**
   * 分页查看文章
   */
  getArticlePagination(param: ArticleQueryParam) {
    return this.http.get(
      'lql/article',
      param
    );
  }
  /**
   * 删除文章
   */
  deleteIt(id: any) {
    return this.http.delete(
      `lql/article/${id}`,
    );
  }
}
