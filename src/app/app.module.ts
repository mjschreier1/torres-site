import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { LinksComponent } from './components/header/links/links.component';
import { SocialIconsComponent } from './components/header/social-icons/social-icons.component';
import { HamburgerComponent } from './components/header/hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinksComponent,
    SocialIconsComponent,
    HamburgerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
