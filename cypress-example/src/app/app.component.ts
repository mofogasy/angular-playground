import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  changeTitle(newTitle: string, toUpperCase: boolean): void {
    this.title = toUpperCase ? newTitle.toLocaleUpperCase() : newTitle;
  }
}
