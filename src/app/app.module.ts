import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MainModule } from './pages/main/main.module';
import { CommonModule } from './common/common.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgtUniversalModule } from '@ng-toolkit/universal';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgtUniversalModule,
    BrowserAnimationsModule,
    MainModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
