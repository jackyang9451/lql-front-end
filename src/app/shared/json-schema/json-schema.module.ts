import { NgModule } from '@angular/core';
import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { SharedModule } from '@shared';

import { TinymceWidget } from './TinymceWidget';

export const SCHEMA_THIRDS_COMPONENTS = [
  TinymceWidget,
];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot()
  ],
  exports: [
    ...SCHEMA_THIRDS_COMPONENTS
  ]
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
