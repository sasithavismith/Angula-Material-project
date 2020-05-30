import { Component, OnInit } from '@angular/core';
import {FormControl, Validator, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.firstFormGroup=this._formBuilder.group({
      firstName: ['',[Validators.required,Validators.minLength(4)]],
      lastName: ['',Validators.required]
    });
    this.secondFormGroup= this._formBuilder.group({
      secondCtrl: ['',Validators.required]
    });
  }
getData(){
  console.log("first name :"+this.firstFormGroup.value["firstName"]);
}
}
