import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor() {}

  scrollTo(target: string) {
    const to: HTMLElement = document.querySelector(target);
    to.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
