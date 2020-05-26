import { Component, OnInit } from '@angular/core';

export interface Employee{
id:string;
name:string;
email:string;
password:string;
}
@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
employees: Employee[]=[
  {
id:"1",
name:"sasitha", 
email:"sasitha@gmail.com" ,
password:"123"
},
{
  id:"2",
  name:"thilini", 
  email:"thilini@gmail.com" ,
  password:"1234"
  },
  {
    id:"3",
    name:"vismith", 
    email:"vismith@gmail.com" ,
    password:"123"
    }
];
  constructor() { }

  ngOnInit(): void {
  }
show(){
  alert('Hellow Sasithaview');
  console.log('sasitha');
}
}
