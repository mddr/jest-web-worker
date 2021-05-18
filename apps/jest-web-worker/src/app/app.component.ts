import { Component } from '@angular/core';
import { tap } from 'rxjs/operators';

import { WebWorkerService } from '@jest-web-worker/web-workers';

@Component({
  selector: 'jest-web-worker-root',
  template: `
    <h1>Web Worker test</h1>
    <p>{{ result$ | async }}</p>
  `,
  styles: [],
})
export class AppComponent {
  result$ = this.webWorkers
    .runWorker$('lorem ipsum')
    .pipe(tap((r) => console.log({ result: r })));

  constructor(private webWorkers: WebWorkerService) {}
}
