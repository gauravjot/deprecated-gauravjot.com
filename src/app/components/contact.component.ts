import { Component } from '@angular/core';
import { fadeInAnimation } from '../animations/fadein.animation';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  // make fade in animation available to this component
  animations: [fadeInAnimation]
})
export class ContactComponent {
}
