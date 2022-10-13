import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})
export class BotComponent implements OnInit {
  selected: string = 'How can we help?';
  greeting: string = 'Hello, how may I help you?';
  options: string[] = []
  default_options = []
  api_options = []
  isHidden: boolean = false;
  button_text: string = 'Hide'
  statusClass = 'unhidden';

  //option_list
  backOption: string = ''
  hotelOption: string = ''
  adventureOption: string = ''
  contactOption: string = ''

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:3000/bot_options/1').subscribe(data => {
      this.backOption = data.option1
      this.hotelOption = data.option2 
      this.adventureOption = data.option3
      this.contactOption = data.option4
      this.options = [this.hotelOption, this.adventureOption, this.contactOption]
    })
  }
  

  hide_bot(){
    if(this.isHidden == false){
      this.statusClass = 'hidden';
      this.isHidden = true
      this.button_text = "Unhide"
    }else{
      this.statusClass = 'unhidden';
      this.isHidden = false
      this.button_text = "Hide"
    }
  }

  show_change(){
      const initial_options = [this.backOption, this.hotelOption, this.adventureOption, this.contactOption]
      if(this.selected == "Back"){
        this.greeting = "Hello, how may I help you?'"
        this.options = initial_options
        this.selected = "How can we help?"
      }
      else if(this.selected == "Adventures"){
        this.greeting = "What kind of adventures?"
        this.options = ["Back", "London", "New York", "Monaco"]
        this.selected = "List of Adventures"
      }
      else if(this.selected == "Hotels"){
        this.greeting = "What kind of hotels?"
        this.options = ["Back", "London", "Yerevan", "Monaco"]
        this.selected = "List of Hotels"
      }
      else if(this.selected == "Contact"){
        console.log("OK")
        this.selected = "Our Email: nobitour@gmail.com Contact Phone: +123456789"
      }  
  }
}
