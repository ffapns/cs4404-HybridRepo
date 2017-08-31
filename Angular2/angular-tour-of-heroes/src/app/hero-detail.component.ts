import { Hero } from './hero';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  template: `
  <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`
})

export class HeroDetailComponent {
   @Input() hero: Hero;
}