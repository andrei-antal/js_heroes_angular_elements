import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { MyRatingComponent } from './my-rating.component';
import { RatingComponent } from './rating.component';

import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    MyRatingComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [MyRatingComponent]
  // bootstrap: [MyRatingComponent]
})
export class CustomElementModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(MyRatingComponent,
      {injector : this.injector});
    customElements.define('my-rating', el);
  }
  ngDoBootstrap() {
  }
}
