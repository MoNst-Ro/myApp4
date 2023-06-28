import { Component } from '@angular/core';
import { User } from './model/user'

@Component({
  selector: 'app-root',
  template: `
  <h3>Input template e riferimenti a variabili + keyboard events</h3>
  <h3>You can add an user by pressing ENTER key or Button ADD</h3>
  <input type="text" placeholder="add username" #inputName>
  <input type="text" placeholder="add age" #inputAge>
  <button (click)="add(inputName, inputAge)">ADD</button>
  <li *ngFor="let user of users">
    {{user.name}} - {{user.age}}
  </li>
  
  <hr>
  <h3>1 way binding,se modifico questo input non viene modificata la proprietà infatti rimane Mario</h3>
  <input type="text" placeholder="add username" [ngModel]="label">
  {{label}}
  <hr>
  
  <h3>2 way binding aggiunte le tonde dentro le quadre in ngModel, se modifico questo input modifico anche la proprietà</h3>
  <input type="text" placeholder="add username" [(ngModel)]="label">
  {{label}}
  <small *ngIf="label.length < 3">Too short</small>
  <hr>
  `,
  styles: []
})
export class AppComponent {
 label = 'Guest';
 
 constructor (){
  setTimeout(() => {
    this.label = 'Mario';
  } , 2000)
 }
 /////////////////////////////////



//Input template e riferimenti a variabili + keyboard events
  users: User[] = [
    {name: 'Joshua', age: '13'}
  ];

  add(inputName: HTMLInputElement, inputAge: HTMLInputElement) {
   this.users.push({name: inputName.value, age: inputAge.value});
   inputName.value = '';
   inputAge.value = '';
  }
  ///////////////////////////////
}
