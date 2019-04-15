import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-news-news-delete',
  templateUrl: './news-delete.component.html',
})
export class NewsNewsDeleteComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
