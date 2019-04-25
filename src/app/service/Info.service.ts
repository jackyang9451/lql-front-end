import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(
    private http: _HttpClient
  ) { }

  /**
   * 根据articleSectionId查询指定板块的信息 分页查询
   */
  getInfoByArticleSectionId(sectionId: number, size = 7, num = 1) {
    const optionalUrl = 'lql/article';
    return this.http.get(
      optionalUrl,
      {
        articleSectionId: sectionId,
        pageSize: size,
        pageNum: num,
        sortField: 'id',
        sortOrder: 'descend'
      }
    );
  }
  ///////////////////////// GET请求 ///////////////////////////////////
  /**
   * 获取所有的文章信息
   */
  getArticleAll() {
    const optionalUrl = 'lql/article';
    const url = `${optionalUrl}`;
    return this.http.get(url);
  }
  /**
   * 获取指定ID的文章内容
   */
  getArticleById(id: any) {
    const optionalUrl = 'lql/article/';
    const url = `${optionalUrl}${id}`;
    return this.http.get(url);
   }
   /**
    * 分页请求文章
    * pageNum 页数
    * pageSize 每页的数量=>这个一般是不变的
    */
   getArticlePagination(pageNum: any, pageSize: any) {
     const optionalUrl = `lql/article?pageSize=${pageSize}&pageNum=${pageNum}`;
     const url = `${optionalUrl}`;
     return this.http.get(url)  ;
   }
   //////////////////////// POST 请求 ////////////////////////////////////////////
   addArticle(article: any) {
     const optionalUrl = 'lql/article';
     const url = `${optionalUrl}`;
     // 直接把对象扔进去就可以了
     return this.http.post(url, article);
   }

   ///////////////// DELETE请求 /////////////////////////////////////////////////
   deleteArticle(id: any) {
     const optionalUrl = 'lql/article/';
     const url = `${optionalUrl}${id}`;
     return this.http.delete(url);
   }
   //////////////// PUT请求 ///////////////
   modifyArticle(article: any) {
    const optionalUrl = 'lql/article';
    const url = `${optionalUrl}`;
    return this.http.put(url, article);
  }
}
