import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-success',
  templateUrl: './success.component.html',
})
export class ResultSuccessComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
    ) { }
  // this.router.navigate(['/result/success']);

  ngOnInit() { }

  click() {
    this.router.navigate(['/']);
  }
}
