import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: 'app-hidden-element',
  templateUrl: './hidden-element.component.html',
  animations: [
    trigger('heightToggle', [
      state('inactive', style({
        height: '0px',
        padding: '4px',
        overflow: 'hidden',
      })),
      state('active', style({
        height: '100px'
      })),
      transition('inactive <=> active', animate('200ms ease'))
    ])
  ]
})
export class HiddenElementComponent {
  state:string = 'inactive';
  hidden: boolean = false;
  unhide() {
    this.state = (this.state === 'inactive') ? this.state = 'active' : this.state = 'inactive';
  }

  showText() {
    this.hidden = !this.hidden;
  }

  constructor() { }


}
