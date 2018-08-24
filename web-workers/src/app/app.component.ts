import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  worker: Worker;
  otherWorker: Worker;
  message: string;

  constructor() {
    this.start();
    this.otherWorker = new Worker('worker.js');
    this.otherWorker.addEventListener('message', message => console.log('Message from other worker', message.data));
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
}
