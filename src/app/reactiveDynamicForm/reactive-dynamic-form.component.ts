import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ValidationService } from '../shared/validation.service';

@Component({
    selector: 'reactive-dynamic',
    templateUrl: 'reactive-dynamic-form.component.html'
})
export class ReactiveDynamicFormComponent implements OnInit {
    model: Hero;
    heroForm: FormGroup;
    formModelProps = [];
    submitted: boolean; 

    constructor() { }

    ngOnInit() { 
        this.model = new Hero(0, '', '', '', );
        const formModel = {};
        let validators = [ Validators.required ];
        for (const prop of Object.keys(this.model)) {
            if (prop.indexOf('email') !== -1) validators.push(ValidationService.emailValidator);
            formModel[prop] = new FormControl(this.model[prop], validators);
            this.formModelProps.push(prop);
        }
        this.heroForm = new FormGroup(formModel);
    }

    submit() {
        console.log(this.formModelProps);
        //this.submitted = true;
    }

    words2 = [{value: '', value2: '', value3:'', value4:''}];
  
    add() {
      this.words2.push({value: '', value2: '', value3:'', value4:''});      
    }

}