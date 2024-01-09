import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AdminCoreModule } from '@workspace/admin/core';
import { AdminFeaturesModule } from '@workspace/admin/features';
import { AdminLayoutModule } from '@workspace/admin/layout';
import { AdminShellComponent } from './shell.component';

@NgModule({
  declarations: [AdminShellComponent],
  imports: [
    HttpClientModule,

    AdminCoreModule,
    AdminLayoutModule,
    AdminFeaturesModule,
  ],
  exports: [AdminShellComponent],
})
export class AdminShellModule {}
