import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() {}

  scrollTo(target: string) {
    if (target === 'up') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const to: HTMLElement = document.querySelector(target);
    to.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
