import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WebWorkerService {
  runWorker$(text: string) {
    const worker = new Worker(new URL('./sample.worker', import.meta.url), {
      type: 'module',
    });

    return new Observable((subscriber) => {
      worker.onmessage = ({ data }) => {
        subscriber.next(data);
      };
      worker.onerror = () => {
        subscriber.error();
      };

      worker.postMessage(text);
    });
  }
}
