import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KitchenShellComponent } from './shell.component';

@NgModule({
  declarations: [KitchenShellComponent],
  imports: [BrowserAnimationsModule, HttpClientModule],
  exports: [KitchenShellComponent]
})
export class KitchenShellModule {}
