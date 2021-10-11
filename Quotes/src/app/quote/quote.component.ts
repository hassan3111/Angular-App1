import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote'
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

   deleteQuote(isComplete: any, index: number){
     if(isComplete){
       let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}..?`)

       if(toDelete){
         this.quotes.splice(index, 1);
       }
     }
   }

  toggleDetails(index:number){
    this.quotes[index].showDescription =! this.quotes[index].showDescription;
  }

  upvotes:number = 0;
  downvotes: number = 0;

  upvoteButton(i:number){
    this.quotes[i].upvotes++;
  }
  downvoteButton(i:number){
    this.quotes[i].downvotes++;
  }

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.unshift(quote);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
