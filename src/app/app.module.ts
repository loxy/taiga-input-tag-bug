import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TuiStringHandler } from '@taiga-ui/cdk';

import { TUI_ICONS_PATH, TuiRootModule, TuiTextfieldControllerModule, } from '@taiga-ui/core';
import { TuiDataListWrapperModule, TuiInputTagModule, TuiMultiSelectModule } from '@taiga-ui/kit';

import { AppComponent } from './app.component';

export const ICONS_PATH: TuiStringHandler<string> = name => {
  if (name.startsWith('tui')) {
    return `assets/taiga-ui/icons/${name}.svg#${name}`;
  }
  return name.includes('.svg#') ? name : `#${name}`;
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TuiRootModule,
    TuiMultiSelectModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    TuiInputTagModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: TUI_ICONS_PATH,
      useValue: ICONS_PATH,
    },
  ],
})
export class AppModule {}


