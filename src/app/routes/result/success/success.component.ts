import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result-success',
  templateUrl: './success.component.html',
})
export class ResultSuccessComponent implements OnInit {

  constructor(private location: Location) { }
  // this.router.navigate(['/result/success']);

  ngOnInit() { }

}
