import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";

import { Item } from "./item";

@Component({
  moduleId: module.id,
  selector: 'app-list2',
  templateUrl: './list2.component.html'
})
export class List2Component {

  items = [
    new Item('Vivaldi'),
    new Item('Dvorjack'),
    new Item('Bach'),
  ];
  
  selectedIndex: number;

  select(index: number) {
    this.selectedIndex = index;
  }

}
