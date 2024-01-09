import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KitchenShellModule } from '@workspace/kitchen/shell';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, KitchenShellModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
