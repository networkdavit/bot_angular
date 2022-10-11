import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  selected: string = '';
  greeting: string = 'Hello, how may I help you?';
  options = ["Hotels", "Adventures", "Contact"]

  constructor() { }

  ngOnInit(): void {
  }
  
  // answer_on_click(){
  //   console.log(this.selected)
  //   if(this.selected == "Adventures"){
  //     this.greeting = "What kind of adventures?"
  //   }
  //   else if(this.selected == "Hotels"){
  //     this.greeting = "What kind of hotels?"
  //   }
  //   else if(this.selected == "Contact"){
  //     this.selected = "Our email is nobitour@gmail.com"
  //   }
  // }

  show_change(){
    if(this.selected == "Adventures"){
      this.greeting = "What kind of adventures?"
      this.options = ["London", "New York", "Monaco"]
    }
    else if(this.selected == "Hotels"){
      this.greeting = "What kind of hotels?"
      this.options = ["London", "Yerevan", "Monaco"]
    }
    else if(this.selected == "Contact"){
      this.selected = "Our email is nobitour@gmail.com"
    }
  }

}
