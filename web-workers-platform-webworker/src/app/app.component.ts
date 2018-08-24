import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Welcome to {{ title }}!
      </h1>
    </div>
    <h2>Long running task freezes UI</h2>
    <p>
      <input #messageInput type="text">&nbsp;
      <button type="button" (click)="updateMessage(messageInput.value)">Update</button>&nbsp;
      {{message}}<br>
      <input type="checkbox">
    </p>
  `,
  // templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  message;

  updateMessage(message: string): void {
    let cnt = 0;
    while (cnt < 5000) {
      console.log('some output');
      cnt++;
    }
    this.message = message;
  }
}
