import { Injectable } from '@angular/core';
import { ClickDispatcherService } from './click-dispatcher.service';

@Injectable({
  providedIn: 'root'
})
export class RenderingEngineService {

  private _canvas: any;
  private _context: any;
  private _elements: any[] = [];

  constructor(private _clickDispatcher: ClickDispatcherService) {
    setInterval(() => {
      this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
      this._elements.forEach(element => {
        if (element.id === 'line') {
          this._context.beginPath();
          let point = element.points[0];
          this._context.moveTo(point.x, point.y);
          for (let i = 1; i < element.points.length; i++) {
            point = element.points[i];
            this._context.lineTo(point.x, point.y);
          }
          this._context.stroke();
        } else {
          this._context.fillStyle = element.c;
          this._context.fillRect(element.x, element.y, element.w, element.h);
        }
      });
    }, 50);
  }

  set canvas(canvas: any) {
    this._canvas = canvas;
    this._context = this._canvas.getContext('2d');
    const elemLeft = this._canvas.offsetLeft;
    const elemTop = this._canvas.offsetTop;

    this._canvas.addEventListener('click', (event) => {
      const x = event.pageX - elemLeft, y = event.pageY - elemTop;

      const clickedElement = this._elements
        .find(element => y > element.y && y < element.y + element.h && x > element.x && x < element.x + element.w);

      this._clickDispatcher.onClick(clickedElement);

    }, false);
  }

  public addElement(element: { id: string}): void {
    const index = this._elements.findIndex(e => e.id === element.id);
    if (index !== -1) {
      this._elements.splice(index, 1, element);
    } else {
      this._elements.push(element);
    }
  }

  removeElement(elementId: string) {
    const index = this._elements.findIndex(e => e.id === elementId);
    if (index !== -1) {
      this._elements.splice(index, 1);
    }
  }
}
