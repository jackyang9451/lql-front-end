import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-result-fail',
  templateUrl: './fail.component.html',
})
export class ResultFailComponent implements OnInit {

  constructor(private http: _HttpClient) { }

  ngOnInit() { }

}
