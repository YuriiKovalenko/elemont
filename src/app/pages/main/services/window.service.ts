import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  private _window: Window;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    // @Optional @Inject(REQUEST) private request: any
  ) {
    // if (isPlatformServer(platformId)) {
    //   this._window = {
    //     navigator: {},
    //     URL: this.request.headers.host + '' + this.request.url
    //   };
    // } else {
    //   this._window = window;
    // }
  }
}
