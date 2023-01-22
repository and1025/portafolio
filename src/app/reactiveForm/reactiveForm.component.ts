import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationService } from '../shared/validation.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'reactive-driven-form',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveFormComponent implements OnInit {
  heroForm: FormGroup;
  model: Hero; 
  submittedModel: Hero; 
  powers: string[];
  submitted: boolean = false;
  localidad:string = 'none';
  
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
      this.model = new Hero(18, 'Dr IQ', 'Really Smart', 'Chuck Overstreet', );
      
      this.powers = ['Really Smart', 'Super Flexible', 
                     'Hypersound', 'Weather Changer'];                     
                     
      this.heroForm = this.formBuilder.group({
        nombre:     [this.model.nombre, Validators.required],
        altDireccionerEgo: [this.model.Direccion, Validators.required],        
        barrio:    [this.model.barrio, Validators.required]
      });
  }

  onSubmit({ value, valid }: { value: Hero, valid: boolean }) {
    this.submitted = true;
    this.submittedModel = value;
  }
}