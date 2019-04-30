import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(@Inject(WINDOW) private window: Window) {}

  scrollTo(target: string) {
    if (target === 'up') {
      this.window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elementToView: HTMLElement = document.querySelector(target);
    elementToView.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
