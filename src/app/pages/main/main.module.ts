import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PartnersComponent } from './partners/partners.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
  exports: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    AdvantagesComponent,
    SolutionsComponent,
    ContactsComponent,
    PartnersComponent,
    FeedbackComponent
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    AdvantagesComponent,
    SolutionsComponent,
    ContactsComponent,
    PartnersComponent,
    FeedbackComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class MainModule {}
