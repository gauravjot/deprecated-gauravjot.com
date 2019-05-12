import { Component } from '@angular/core';
import { fadeInAnimation } from '../animations/fadein.animation';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['../app.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation]
})

export class ResumeComponent {

}
