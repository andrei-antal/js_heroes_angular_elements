import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  updateRatings(rating): boolean[] {
    return Array.from({ length: 5 }).map((state, index) => index < rating + 1);
  }
}
