import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
   ProductName: string="samsung";
   ProductId:number=1234;
   ProductName2: string="Airtel";
   ProductId2:number=1234;
   ProductName3: string="Galaxy";
   ProductId3:number=1234;
   ProductName4: string="Motorola";
   ProductId4:number=1234;
   ProductName5: string="Vivo";
   ProductId5:number=1234;
   isshow:boolean=false;
   
   
   isproductAvailable !:boolean;
  constructor() { }

  ngOnInit(): void {
    this.isproductAvailable=Math.random()>= .5 ?true:false
  }

  setBgColor(){
    return this.isproductAvailable ? 'orange' : '#ededed'
  }

}
