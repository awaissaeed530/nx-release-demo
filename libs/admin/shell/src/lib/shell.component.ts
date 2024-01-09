import { Component } from '@angular/core';
import { createStateMachine } from '@workspace/shared/state-machine';

@Component({
  selector: 'app-admin-shell',
  template: `<div class="text-green-600">Admin Shell</div>`,
})
export class AdminShellComponent {
  constructor() {
    const message = createStateMachine();
    console.log(message);
  }
}
