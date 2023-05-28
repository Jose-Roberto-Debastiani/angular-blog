import { Component, Input, OnInit } from '@angular/core';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover : string = ""

  @Input()
  cardTitle : string = "";

  @Input()
  cardDescription : string = "";

  @Input()
  Id : string = "0";

  constructor() { }

  ngOnInit(): void {
    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.photoCover = result.photoCover;
  }  

}
