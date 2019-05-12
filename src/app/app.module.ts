import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { ResumeComponent } from './components/resume.component';
import { MeComponent } from './components/me.component';
import { WebsiteComponent } from './components/website.component';
import { ContactComponent } from './components/contact.component';
import { AccompComponent } from './components/accomp.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    MeComponent,
    WebsiteComponent,
    ContactComponent,
    AccompComponent
  ],
  imports: [
    BrowserModule,
    SlimLoadingBarModule.forRoot(),
    routing,
    BrowserAnimationsModule
  ],
  providers: [SharedService],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
