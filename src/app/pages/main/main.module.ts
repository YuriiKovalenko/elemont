import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PartnersComponent } from './partners/partners.component';

@NgModule({
  exports: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    AdvantagesComponent,
    SolutionsComponent,
    ContactsComponent,
    PartnersComponent
  ],
  declarations: [
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    AdvantagesComponent,
    SolutionsComponent,
    ContactsComponent,
    PartnersComponent
  ],
  imports: [AngularFontAwesomeModule],
  providers: []
})
export class MainModule {}
