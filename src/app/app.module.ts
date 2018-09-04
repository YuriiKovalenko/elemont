import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { MainModule } from './pages/main/main.module';
import { CommonModule } from './common/common.module';

@NgModule({
  declarations: [AppComponent, MainComponent],
  imports: [
    BrowserModule,
    MainModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
