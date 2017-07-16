import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, query, animateChild, stagger } from '@angular/animations';

@Component({
  selector: 'app-switch-content',
  templateUrl: './switch-content.component.html',
  animations: [
    trigger('container', [
      state('tall', style({
        height: '100%',
        backgroundColor: 'orange'
      })),
      transition('* <=> tall', animate('.15s')),
    ]),

    trigger('enterTrigger', [
      state('fadeIn', style({
        transform: 'translateX(0)',
        color: 'red'
      })),
      transition('void <=> *, void <=> fadeIn, * <=> fadeIn', [
        style({ transform: 'translateX(-100%)' }),
        animate(250, style({ transform: 'translateX(0)', color: 'blue' })),
      ])
    ]),
  ]
})
export class SwitchContent {
  switch_exp = false;
  containerState: string = 'idle';
  triggerState: boolean = false;

  stateChange = () => {
    this.switch_exp =! this.switch_exp;
    (this.containerState === 'tall') ? this.containerState = '*' : this.containerState = 'tall';
  }

  fadeContent = () => {
    (this.triggerState === false) ? this.triggerState = true : this.triggerState = false;
  }
}
