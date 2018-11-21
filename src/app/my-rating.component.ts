import { Component, ViewEncapsulation, OnChanges, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RatingService } from './rating.service';

@Component({
  selector: 'my-rating',
  template: `
    <div class="my-rating">
      <one-rating *ngFor="let rating of ratingStates;let ratingIndex=index"
        [isFilled]="rating"
        (ratingClicked)="handleRatingClicked(ratingIndex)">
      </one-rating>
    </div>
  `,
  styles: ['.my-rating { display: flex; padding: 5px;}'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class MyRatingComponent implements OnChanges, OnInit {
  public ratingStates: boolean[];
  private theRating = 1;

  @Input()
  get rating() {
    console.log('-- read rating --');
    return this.theRating;
  }
  set rating(newRating: any) {
    console.log('-- set rating --');
    this.theRating = parseInt(newRating, 10);
    this.ratingChange.emit(newRating);
  }

  @Output() ratingChange = new EventEmitter();

  constructor(private ratingService: RatingService) {}

  ngOnInit() {
    this.ratingStates = this.ratingService.updateRatings(this.theRating);
  }

  ngOnChanges() {
    console.log('-- ngOnChanges --');
    this.ratingStates = this.ratingService.updateRatings(this.theRating);
  }

  handleRatingClicked(newRating) {
    console.log('-- CLICK HANDLER --', newRating);
    this.rating = newRating;
    this.ratingStates = this.ratingService.updateRatings(this.theRating);
  }
}
