import {Component} from '@angular/core';

interface Test {
  valX: string;
}

@Component({
  selector: 'app-root',
  template: `
    <span (click)="subscribe(value)">{{title}}</span>
  `
})

export class AppComponent {
  title = 'title';
  value: Test;

  constructor() {
    this.value = {valX: '123'};
  }

  subscribe(val: Test): string {
    console.log('val', val);
    return val.valX;
  }
}
