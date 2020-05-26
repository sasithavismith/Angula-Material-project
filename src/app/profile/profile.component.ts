import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
name=new FormControl();
email= new FormControl();
  constructor() { }

  ngOnInit(): void {
  }
save(){
  alert(this.name.value);
  alert(this.email.value);
}
}
