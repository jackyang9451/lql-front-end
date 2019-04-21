import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ResultRoutingModule } from './result-routing.module';
import { ResultSuccessComponent } from './success/success.component';
import { ResultFailComponent } from './fail/fail.component';

const COMPONENTS = [
  ResultSuccessComponent,
  ResultFailComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    ResultRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class ResultModule { }
