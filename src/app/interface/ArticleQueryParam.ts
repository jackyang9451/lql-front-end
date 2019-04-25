export class ArticleQueryParam {
  public articleSectionId;
  public pageNum;
  public pageSize;
  public sortField;
  public sortOrder;

  constructor(articleSectionId, pageNum, pageSize = 7, sortField = 'id', sortOrder = 'descend') {
    this.articleSectionId = articleSectionId;
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.sortField = sortField;
    this.sortOrder = sortOrder;
  }

}
