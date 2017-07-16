import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { List1Component } from './list1/list1.component';
import { List2Component } from './list2/list2.component';
import { HiddenElementComponent } from './hidden-element/hidden-element.component';
import { StaggerAnimationComponent } from './stagger-animation/stagger-animation.component';
import { ChildAnimationComponent } from './child-animation/child-animation.component';
import { SwitchContent } from './switch-content/switch-content.component';

@NgModule({
  declarations: [
    MainComponent,
    List1Component,
    List2Component,
    HiddenElementComponent,
    StaggerAnimationComponent,
    ChildAnimationComponent,
    SwitchContent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
