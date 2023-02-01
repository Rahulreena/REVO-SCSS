import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CardsComponent } from './cards/cards.component';
import { ProjectCardsComponent } from './project-cards/project-cards.component';
import { BuildersCardComponent } from './builders-card/builders-card.component';
import { DownloadSectionComponent } from './download-section/download-section.component';
import { FooterComponent } from './footer/footer.component';
import { FooterLastComponent } from './footer-last/footer-last.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingpageComponent,
    CardsComponent,
    ProjectCardsComponent,
    BuildersCardComponent,
    DownloadSectionComponent,
    FooterComponent,
    FooterLastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
