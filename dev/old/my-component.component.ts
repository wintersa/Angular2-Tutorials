import {Component} from 'angular2/core';

@Component({
  selector:  'my-component',
  template: `
        Hi, I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span>



        and am fucking <span [class.is-awesome]="inputElement.value === 'yes'">awesome</span>
        <br>
        <br>
        Freakin awesome isn't it?
        <input type="text" #inputElement (keyup)="0">
        <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' is entered</button>
  `,
  styleUrls: ['src/css/mycomponent.css']
})

export class MyComponentComponent{
    name = 'Tony';
}
