import { Component, OnInit } from '@angular/core';
import {FormControl, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
email= new FormControl('',[Validators.required, Validators.email]);
hide=true; 
  constructor() { }

  ngOnInit(): void {
  }
getErrorMessage(){
  return this.email.hasError('required')? 'You must enter a value':
  this.email.hasError('email')? 'Not a valid email':
  '';
}
}
