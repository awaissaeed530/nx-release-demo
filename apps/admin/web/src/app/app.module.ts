import { NgModule } from '@angular/core';
import { AdminShellModule } from '@workspace/admin/shell';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AdminShellModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
