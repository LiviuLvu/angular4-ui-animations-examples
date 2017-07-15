import { Component } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

@Component({
  selector: 'app-stagger-animation',
  templateUrl: './stagger-animation.component.html',
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('100ms', [
          animate('200ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateX(0px)', offset: 1})
          ]))
        ]), {optional: true}),
        
        query(':leave', stagger('100ms', [
          animate('150ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(0px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateX(-75px)', offset: 1})
          ]))
        ]), {optional: true})

      ])
    ])
  ]
})
export class StaggerAnimationComponent {
  items = [];
  constructor() {
    this.items = ['List Item One', 'List Item Two', 'List Item Three'];
  }

  pushItem() {
    this.items.push('Added a list item');
  }

  removeItem() {
    this.items.pop();
  }
}
