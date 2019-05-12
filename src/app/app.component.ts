import { Component, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Event } from '@angular/router';
import {Title} from '@angular/platform-browser';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { DOCUMENT } from '@angular/platform-browser';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SharedService]
})
export class AppComponent {

  initialBaseURL: String;
  navSelected: number;

  constructor(titleService: Title, router: Router, activatedRoute: ActivatedRoute, @Inject(DOCUMENT) private document: any,
    private slimLoadingBarService: SlimLoadingBarService, private sharedService: SharedService) {

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var title = this.getTitle(router.routerState, router.routerState.root).join('-');
        titleService.setTitle(title);
      }
    });

    this.initialBaseURL = (this.document.location.href).split("/")[3];
    if (this.initialBaseURL === "resume") {
      this.navSelected = 2;
    } else if (this.initialBaseURL === "website") {
      this.navSelected = 3;
    } else if (this.initialBaseURL === "contact") {
      this.navSelected = 4;
    } else if (this.initialBaseURL === "accomplishments") {
      this.navSelected = 5;
    } else {
      this.navSelected = 1;
    }

    sharedService.changeEmitted$.subscribe(
      number => {
        this.navSelect(number);
        console.log('yay1')
      }
    );

  }

  getTitle(state, parent) {
    var data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  navSelect(i: number) {
    if (this.navSelected != i) {
      this.navSelected = i;
    }
    this.slimLoadingBarService.complete();
  }

}
