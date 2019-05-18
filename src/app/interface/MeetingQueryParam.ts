export class MeetingQueryParam {
  public pageNum;
  public pageSize;
  public sortField;
  public sortOrder;

  constructor(pageNum, pageSize = 6, sortField = 'id', sortOrder = 'descend') {
    this.pageNum = pageNum;
    this.pageSize = pageSize;
    this.sortField = sortField;
    this.sortOrder = sortOrder;
  }

}
