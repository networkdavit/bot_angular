import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  selected: string = '';
  greeting: string = 'Hello, how may I help you?';

  constructor() { }

  ngOnInit(): void {
  }
  
  test(){
    console.log(this.selected)
    if(this.selected == "Adventures"){
      this.greeting = "What kind of adventures?"
    }
    if(this.selected == "Hotels"){
      this.greeting = "What kind of hotels?"
    }
    if(this.selected == "Contact"){
      this.selected = "Our email is nobitour@gmail.com"
    }
  }

}