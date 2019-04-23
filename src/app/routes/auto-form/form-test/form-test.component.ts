import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { ActivatedRoute, Router } from '@angular/router';
import { SFSchema } from '@delon/form';
@Component({
  selector: 'app-auto-form-form-test',
  templateUrl: './form-test.component.html',
})
export class AutoFormFormTestComponent implements OnInit {
  schema: SFSchema;
  constructor(
    private http: _HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.paramMap.get('i'));
    this.schema = JSON.parse(this.route.snapshot.paramMap.get('i'));
   }

  formSubmit(value: any) {
    console.log(value);
    this.router.navigate(['/result/success']);
  }
}
