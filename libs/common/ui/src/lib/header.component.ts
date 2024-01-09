import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-common-header',
  standalone: true,
  imports: [CommonModule],
  template: `<div>Header</div>`,
  styles: `
  div {
    font-size: 40px;
  }
  `,
})
export class HeaderComponent {}
