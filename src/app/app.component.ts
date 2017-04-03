import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'First Person Name' },
  { id: 12, name: 'Second Person Name' },
  { id: 13, name: 'Third Person Name' },
  { id: 14, name: '4th Person Name' },
  { id: 15, name: '5th Person Name' },
  { id: 16, name: '6th Person Name' },
  { id: 17, name: '7th Person Name' },
  { id: 18, name: '8th Person Name' },
  { id: 19, name: '9th Person Name' },
  { id: 20, name: '10th Person Name' }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'World';
  title = 'Unit Testing';
  heroes = HEROES; // heroes is a variable that using constant "HEROES"
  intValue: number;
  stringValue: string;
  selectedHero: Hero; // to get the selected hero details and created a property for selectedHero.
  onSelect(hero: Hero): void {
      this.selectedHero = hero;
  }


  public testInt() {
    this.intValue = 10;
  }
  testString() {
    this.stringValue = 'siddhartha';
  }
}
/*
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  name = 'Angular';
}
*/
