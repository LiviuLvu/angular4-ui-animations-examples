import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, query, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-child-animation',
  templateUrl: './child-animation.component.html',
  animations: [
    trigger('parentAnimation', [

      transition('* => *', [
        query('h3', [
          style({ opacity: 0 }),
          animate(250, style({
            opacity: 1,
            backgroundColor: 'skyblue'
          }))
        ]),
        query('@childAnimation', stagger(100, [
          animateChild()
        ]))
      ])
    ]),
    trigger('childAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate(250, style({
          opacity: 1,
          backgroundColor: 'skyblue'
        }))
      ])
    ])
  ]
})
export class ChildAnimationComponent {
  state: boolean = false;

  toggle = () => {
    this.state =! this.state;
    console.log(this.state);
  }
}
