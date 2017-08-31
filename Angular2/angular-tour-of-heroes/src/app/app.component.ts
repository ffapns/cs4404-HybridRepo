import { selector } from 'rxjs/operator/publish';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-app',
  template: `
  <h1>{{title}}</h1>
  <a routerLink="/heroes">Heroes</a>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
