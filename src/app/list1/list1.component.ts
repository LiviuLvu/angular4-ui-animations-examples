import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  animations: [
    trigger('myAnimation', [

      state('small', style({
        backgroundColor:'#eee',
        transform: 'scale(1)',
      })),
      state('large', style({
        backgroundColor:'#cfd8dc',
        transform: 'scale(1.5)',
      })),

      transition('small <=> large', animate('150ms ease-out'))
    ])
  ]
})
export class List1Component {

  animated:number;
  state:string = 'small';

  heroes1 = [
    { id: 1, name: "Bach" },
    { id: 2, name: "Schubert" }
  ];

  addHero1(newHero1: string) {
    if(newHero1) {
      this.heroes1.push( {id:1, name: newHero1} );
    }
  }

  hideLi1(index:number) {
    this.animated = index;
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small')
  }

}
