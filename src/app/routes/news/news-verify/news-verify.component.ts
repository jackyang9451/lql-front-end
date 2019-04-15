import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-news-news-verify',
  templateUrl: './news-verify.component.html',
})
export class NewsNewsVerifyComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
