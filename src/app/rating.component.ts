import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'one-rating',
  template: `
    <div class="rating"
        [ngClass]="{ 'filled': isFilled }"
        (click)="ratingClicked.emit()">
    </div>
  `,
  styles: [
    `
    .rating.filled {
      background: firebrick;
    }
    .rating {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      margin: 5px;
      cursor: pointer;
      user-select: none;
      background: lightgray;
    }
  `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class RatingComponent {
  @Input() isFilled;
  @Output() ratingClicked = new EventEmitter();
}
