import { Component, HostBinding} from '@angular/core';
import { fadeInAnimation } from '../animations/fadein.animation';

@Component({
  selector: 'me',
  templateUrl: './me.component.html',
  styleUrls: ['../app.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation]
})
export class MeComponent {

  constructor() {

  }

}
