import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MeComponent} from './components/me.component';
import {ResumeComponent} from './components/resume.component';
import {ContactComponent} from './components/contact.component';
import { WebsiteComponent } from './components/website.component';

const appRoutes: Routes = [
  {
    path: '',
    component: MeComponent,
    data: { title: 'Home | Gauravjot' }
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { title: 'Resume | Gauravjot' }
  },
  // {
  //     path: 'accomplishments',
  //     component: AccompComponent,
  //     data: { title: 'Accomplishments | Gauravjot' }
  // },
  {
    path: 'website',
    component: WebsiteComponent,
    data: { title: 'About This Website | Gauravjot' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact | Gauravjot' }
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
