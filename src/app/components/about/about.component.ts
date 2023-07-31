import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  public title:string;
  public subtitle:string;
  public email:string;

  constructor(){
    this.title = "Julian Perdomo";
    this.subtitle = "Desarrollador WEB";
    this.email = 'julian.12040@gmail.com';
  }

  ngOnInit(): void {

    
  }
}
