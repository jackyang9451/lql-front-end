import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { AutoFormRoutingModule } from './auto-form-routing.module';
import { AutoFormAddFormComponent } from './add-form/add-form.component';
import { AutoFormAddFormEditSomeComponent } from './add-form/edit-some/edit-some.component';
import { AutoFormAddFormEditMulitComponent } from './add-form/edit-mulit/edit-mulit.component';
import { AutoFormFormTestComponent } from './form-test/form-test.component';

const COMPONENTS = [
  AutoFormAddFormComponent,
  AutoFormFormTestComponent];
const COMPONENTS_NOROUNT = [
  AutoFormAddFormEditSomeComponent,
  AutoFormAddFormEditMulitComponent];

@NgModule({
  imports: [
    SharedModule,
    AutoFormRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class AutoFormModule { }
