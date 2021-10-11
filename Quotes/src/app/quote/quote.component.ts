import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: any[] = [
    new Quote(1,'Failure','Do not be embarassed by your failures,lern from them and start again', 'Richard Branson', new Date(2021,9,11), 0,0),
    new Quote(2, "Faith", "Faith is taking the first step. Even when you don't see the whole stairs", 'Martin Luther King', new Date(2021,9,11), 0,0),
    new Quote(3,'Change', 'Any change, even a change for the better, is always accompanied by discomfort', 'Arnold Bennett', new Date(2021,9,11), 0,0)
 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
