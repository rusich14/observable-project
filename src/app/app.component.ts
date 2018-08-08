import {Component} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

interface Test {
  valX: number;
}

@Component({
  selector: 'app-root',
  template: `
    <button type="button" (click)="changeObserver()">Change</button>
    <button type="button" (click)="changeObserver2()">Change2</button>
    <button type="button" (click)="changeObserver3()">Change3</button>
  `
})

export class AppComponent {
  test: Test;
  observableValue$ = new Subject<Test>();
  newObservable$: Observable<number>;

  constructor() {
    this.test = {valX: 1};
    this.observableValue$
      .subscribe(observer => {
      console.log('observer', observer);
    });

    this.newObservable$ = Observable.create(observer => {
      observer.next('Observer Data');
    });
  }

  changeObserver() {
    if (this.test.valX <= 3) {
      return this.observableValue$.next({valX: this.test.valX ++});
    }

    this.observableValue$.complete();
  }

  changeObserver2() {
    this.observableValue$.next({valX: this.test.valX ++});
  }

  changeObserver3() {
    this.newObservable$.subscribe(observer => {
      console.log('observer', observer);
    });
  }
}
