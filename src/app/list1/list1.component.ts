import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  animations: [
    trigger('myAnimation', [

      state('*', style({
        transform: 'scale(1)',
        transformOrigin: 'left'
      })),
      state('large', style({
        transform: 'scale(1.5)',
        transformOrigin: 'left'
      })),

      transition('small <=> large', animate('150ms ease'))
    ])
  ]
})
export class List1Component {

  animated:number;
  state:string = 'small';

  heroes1 = [
    { id: 1, name: "Bach" },
    { id: 2, name: "Schubert" },
    { id: 2, name: "Handel" },
  ];

  addHero1(newHero1: string) {
    if(newHero1) {
      this.heroes1.push( {id:1, name: newHero1} );
    }
  }

  hideLi1(index:number) {
    this.animated = index;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.state = 'large';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.state = 'small';
  }

}
