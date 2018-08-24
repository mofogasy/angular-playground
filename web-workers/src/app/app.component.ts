import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'app';
  worker: Worker;
  otherWorkers: Worker[];
  message: string;

  constructor() {
    this.start();
    this.otherWorkers = [];
  }

  ngOnDestroy(): void {
    window.alert('destroying...');
  }

  sendMessage(message): void {
    if (this.worker) {
      this.worker.postMessage(message);
    }
  }

  terminate(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
  }

  start(): void {
    this.worker = new Worker('assets/scripts/pingpong.js');
    this.worker.addEventListener('message', message => this.message = message.data);
    this.worker.addEventListener('error', error => console.log('Error', error));
  }

  addOtherWorker() {
    for (let i = 0; i < 10; i++) {
      const otherWorker = new Worker('worker.js');
      otherWorker.addEventListener('message', message => console.log('Message from other worker', message.data));
      this.otherWorkers.push(otherWorker);
    }
  }

  removeOtherWorker() {
    for (let i = 0; i < 10; i++) {
      const otherWorker = this.otherWorkers.pop();
      if (otherWorker) {
        otherWorker.terminate();
      }
    }
  }
}
