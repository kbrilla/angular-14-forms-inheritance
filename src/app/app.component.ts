import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, FormRecord } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}


export interface IAnimalBase {
  isFish: FormControl<boolean>;
  isNotFish: FormControl<boolean>;
}

export interface IAnimalForm3 {
  animalBasics: FormGroup<IAnimalBase>;
}

export interface IAnimalForm<TAnimalBasics extends IAnimalBase = IAnimalBase> {
  animalBasics: FormGroup<TAnimalBasics>;
}

export interface IDogForm extends IAnimalForm {
  dogStuff: FormGroup<{ canBark: FormControl<boolean> }>;
}

class Test<TFG extends IAnimalForm> {
  form: FormGroup<TFG>;
}